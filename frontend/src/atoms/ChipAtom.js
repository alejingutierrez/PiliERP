import React from 'react';
import { MdFilterChip } from '@material/web/chips/md-filter-chip.js';
import { MdIcon } from '@material/web/icon/md-icon.js';

const ChipAtom = ({
  label,
  variant = 'filled', // 'filled', 'outlined'. MWC MdFilterChip is 'filled' by default. 'elevated' is another option.
  color = 'default',  // MUI color prop. MWC uses theming. Selected state is usually primary.
  icon,               // MUI icon (ReactNode)
  avatar,             // MUI avatar (ReactNode) - treat similar to icon for simplicity
  onDelete,
  onClick,
  selected,           // Explicit selected state for MdFilterChip
  disabled,
  customStyles = {},
  ...props // Other props like 'elevated' for MdFilterChip can be passed via props.
}) => {
  const chipStyles = {
    // Global border radius from guidelines
    '--md-filter-chip-container-shape': 'var(--md-sys-shape-corner-small)',
    // Customizations based on MUI props
    ...customStyles, // Spread customStyles from props first
  };

  if (variant === 'outlined') {
    chipStyles['--md-filter-chip-container-color'] = 'transparent';
    // Use a theme token or a specific color for outline.
    // For now, let's use a generic outline color, assuming it would be defined in a global MWC theme.
    // Or, if 'color' prop is meant to color the outline:
    if (color === 'primary') {
      chipStyles['--md-filter-chip-outline-color'] = 'var(--md-sys-color-primary, #5C6AC4)';
      chipStyles['--md-filter-chip-label-text-color'] = 'var(--md-sys-color-primary, #5C6AC4)';
      chipStyles['--md-filter-chip-icon-color'] = 'var(--md-sys-color-primary, #5C6AC4)';
    } else if (color === 'secondary') {
      chipStyles['--md-filter-chip-outline-color'] = 'var(--md-sys-color-secondary, #2C6ECB)';
      chipStyles['--md-filter-chip-label-text-color'] = 'var(--md-sys-color-secondary, #2C6ECB)';
      chipStyles['--md-filter-chip-icon-color'] = 'var(--md-sys-color-secondary, #2C6ECB)';
    } else {
      chipStyles['--md-filter-chip-outline-color'] = 'var(--md-sys-color-outline, #79747E)'; // Default outline
    }
    // Ensure no elevation for outlined if it was set via props.elevated
    if (props.elevated) {
        props.elevated = false;
    }
  } else { // Filled (default) or elevated
    // For filled chips, MUI's 'color' prop changes the background.
    // MWC selected state handles this for 'primary' or 'secondary' if themed.
    // If a non-selected chip needs specific background color:
    if (!selected && color !== 'default') {
        if (color === 'primary') {
          chipStyles['--md-filter-chip-container-color'] = 'var(--md-sys-color-primary-container, #E8DEF8)';
          chipStyles['--md-filter-chip-label-text-color'] = 'var(--md-sys-color-on-primary-container)';
          chipStyles['--md-filter-chip-icon-color'] = 'var(--md-sys-color-on-primary-container)';
        } else if (color === 'secondary') {
          chipStyles['--md-filter-chip-container-color'] = 'var(--md-sys-color-secondary-container, #E8DEF8)';
          chipStyles['--md-filter-chip-label-text-color'] = 'var(--md-sys-color-on-secondary-container)';
          chipStyles['--md-filter-chip-icon-color'] = 'var(--md-sys-color-on-secondary-container)';
        }
        // Add more semantic color mappings if needed (error, success etc.)
        // else if (color === 'error') targetColor = 'var(--md-sys-color-error-container, #F8F0F0)';
    }
  }


  const handleRemove = (e) => {
    if (onDelete) {
      onDelete(e);
    }
  };

  let iconContent = null;
  if (icon) {
    if (typeof icon === 'string') {
      iconContent = <MdIcon slot="icon">{icon}</MdIcon>;
    } else { // Assumed to be a ReactElement
      iconContent = <div slot="icon">{icon}</div>;
    }
  } else if (avatar) {
     if (typeof avatar === 'string' && avatar.length === 1) { // Simple letter avatar
      iconContent = <div slot="icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius:'50%', backgroundColor:'var(--md-sys-color-primary)', color:'var(--md-sys-color-on-primary)'}}>{avatar}</div>;
    } else if (React.isValidElement(avatar)) { // Image or complex avatar
        iconContent = <div slot="icon">{avatar}</div>;
    } else if (typeof avatar === 'string') { // Assume it's an image URL
        iconContent = <img slot="icon" src={avatar} alt="" style={{width:'24px', height:'24px', borderRadius:'50%'}}/>;
    }
  }

  return (
    <MdFilterChip
      label={label}
      selected={selected}
      removable={!!onDelete}
      onRemove={handleRemove}
      onClick={onClick}
      disabled={disabled}
      style={chipStyles}
      {...props} // Pass other MWC specific props like 'elevated'
    >
      {iconContent}
    </MdFilterChip>
  );
};

export default ChipAtom;
