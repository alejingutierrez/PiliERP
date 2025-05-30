import React from 'react';
import '@material/web/chips/assist-chip.js';

const TagAtom = ({
  label,
  color = 'default', // 'primary', 'secondary', 'error', 'warning', 'success', 'default'
  style: userStyle,
  className,
  ...props
}) => {
  const chipStyle = {
    // Base styling for md-assist-chip to make it look like a small tag
    // MWC chips are fairly customizable with CSS custom properties.
    // We will set some general properties for a "tag" look and then override based on color.
    '--md-assist-chip-container-height': '24px', // Smaller height
    '--md-assist-chip-label-text-size': '0.75rem', // 12px font size
    '--md-assist-chip-spacing-leading': '8px', // Padding
    '--md-assist-chip-spacing-trailing': '8px', // Padding
    // By default, assist chips are not elevated, which is good for tags.
    // Assist chips don't have a strong concept of primary/secondary colors like MUI.
    // We need to set their container color and label color manually.
    // Default/subtle appearance:
    '--md-assist-chip-container-color': 'var(--mwc-theme-surface-container-highest, #E6E1E5)',
    '--md-assist-chip-label-text-color': 'var(--mwc-theme-on-surface-variant, #49454F)',
    // Remove outline if not needed (default is a slight border)
    '--md-assist-chip-outline-width': '0px',
  };

  switch (color) {
    case 'primary':
      chipStyle['--md-assist-chip-container-color'] = 'var(--mwc-theme-primary, #6200ee)';
      chipStyle['--md-assist-chip-label-text-color'] = 'var(--mwc-theme-on-primary, #ffffff)';
      break;
    case 'secondary':
      chipStyle['--md-assist-chip-container-color'] = 'var(--mwc-theme-secondary, #018786)';
      chipStyle['--md-assist-chip-label-text-color'] = 'var(--mwc-theme-on-secondary, #ffffff)';
      break;
    case 'error':
      chipStyle['--md-assist-chip-container-color'] = 'var(--mwc-theme-error, #b00020)';
      chipStyle['--md-assist-chip-label-text-color'] = 'var(--mwc-theme-on-error, #ffffff)';
      break;
    case 'success':
      // Success and Warning are not standard MWC theme colors, use custom or fall back
      chipStyle['--md-assist-chip-container-color'] = 'var(--mwc-theme-success, #36A269)'; // Assuming --mwc-theme-success is defined
      chipStyle['--md-assist-chip-label-text-color'] = 'var(--mwc-theme-on-success, #ffffff)'; // Assuming --mwc-theme-on-success
      break;
    case 'warning':
      chipStyle['--md-assist-chip-container-color'] = 'var(--mwc-theme-warning, #EEC200)'; // Assuming --mwc-theme-warning
      chipStyle['--md-assist-chip-label-text-color'] = 'var(--mwc-theme-on-warning, #000000)'; // Assuming --mwc-theme-on-warning
      break;
    case 'default':
    default:
      // Already set above for default subtle appearance
      break;
  }

  const finalStyle = {...chipStyle, ...userStyle};

  return (
    <md-assist-chip
      label={label}
      style={finalStyle}
      class={className} // Use 'class' for web components
      {...props} // Spread other props, though md-assist-chip has limited props
    >
      {/* Assist chips typically don't have icons unless explicitly added as children */}
    </md-assist-chip>
  );
};

export default TagAtom;
