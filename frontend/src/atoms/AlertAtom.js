import React from 'react';
import { MWCElevatedCard } from '../mwc_wrappers/MWCElevatedCard';
import { MdIcon } from '@material/web/icon/md-icon.js';
import { MdIconButton } from '@material/web/iconbutton/md-icon-button.js';

const AlertAtom = ({
  severity = 'info', // 'error', 'warning', 'info', 'success'
  variant = 'standard', // 'standard', 'filled', 'outlined' (filled/standard will be similar)
  children, // Message content
  title,    // Optional title from props
  action,   // Optional: React node for actions
  onClose,  // Optional: function to call when alert is closed
  customStyles = {},
  ...props // To pass any other props
}) => {
  const getSeverityStyles = () => {
    let iconName = 'info';
    // Default to info color (secondary.main)
    // Default contrast text

    // DESIGN_GUIDELINES.md semantic colors:
    // Success (`success.main`): `#36A269`
    // Warning (`warning.main`): `#EEC200` (Needs dark text)
    // Error (`error.main`): `#D82C0D`
    // Info: using secondary.main `#2C6ECB`

    let backgroundColor, textColor;

    switch (severity) {
      case 'success':
        iconName = 'check_circle';
        backgroundColor = 'var(--custom-color-success)';
        textColor = 'var(--md-sys-color-on-primary)';
        break;
      case 'warning':
        iconName = 'warning';
        backgroundColor = 'var(--custom-color-warning)';
        textColor = 'var(--md-sys-color-on-surface)';
        break;
      case 'error':
        iconName = 'error';
        backgroundColor = 'var(--md-sys-color-error)';
        textColor = 'var(--md-sys-color-on-error)';
        break;
      case 'info':
      default:
        iconName = 'info';
        backgroundColor = 'var(--md-sys-color-primary)';
        textColor = 'var(--md-sys-color-on-primary)';
        break;
    }
    return { iconName, backgroundColor, textColor };
  };

  const { iconName, backgroundColor, textColor } = getSeverityStyles();

  const cardStyle = {
    '--md-elevated-card-container-color': variant === 'outlined' ? 'transparent' : backgroundColor,
    '--md-elevated-card-label-text-color': textColor, // May not directly apply, use on text elements
    '--md-sys-color-on-surface': textColor, // Affects icon and text color if not overridden
    '--md-sys-color-on-surface-variant': textColor,
    '--md-sys-color-primary': textColor, // For icon button if not themed
    '--md-elevated-card-outline-color': variant === 'outlined' ? backgroundColor : 'transparent',
    '--md-elevated-card-outline-width': variant === 'outlined' ? '1px' : '0px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top for multi-line text
    borderRadius: '10px', // Global border radius
    ...customStyles,
  };

  const textContentStyle = {
    color: textColor, // Ensure text color directly
    flexGrow: 1,
    marginLeft: '12px',
    marginRight: (action || onClose) ? '12px' : '0px',
  };

  const titleStyle = {
    fontWeight: '600', // From guidelines h_ variants
    // color: textColor, // Inherited or set directly
  };

  const iconStyle = {
    color: variant === 'outlined' ? backgroundColor : textColor, // Icon takes severity color in outlined variant
    marginTop: '2px', // Slight adjustment for alignment with text
  };

  return (
    <MWCElevatedCard style={cardStyle} {...props}>
      <MdIcon style={iconStyle}>{iconName}</MdIcon>
      <div style={textContentStyle}>
        {title && <div style={titleStyle}>{title}</div>}
        {children}
      </div>
      {action}
      {onClose && (
        <MdIconButton onClick={onClose} style={{ marginLeft: 'auto', color: textColor }}>
          <MdIcon>close</MdIcon>
        </MdIconButton>
      )}
    </MWCElevatedCard>
  );
};

export default AlertAtom;
