import React from 'react';

const BadgeAtom = ({
  badgeContent,
  color = 'default', // 'default', 'primary', 'secondary', 'error'
  variant = 'standard', // 'standard', 'dot'
  max = 99,
  children,
  style, // Allow parent to pass custom styles
  className, // Allow parent to pass custom classes
  ...props
}) => {
  const getBackgroundColor = () => {
    switch (color) {
      case 'primary':
        return 'var(--mwc-theme-primary, #6200ee)';
      case 'secondary':
        return 'var(--mwc-theme-secondary, #018786)';
      case 'error':
        return 'var(--mwc-theme-error, #b00020)';
      default: // 'default' or any other value
        return 'var(--mwc-theme-surface-variant, #e0e0e0)'; // Or a grey color
    }
  };

  const getTextColor = () => {
    switch (color) {
      case 'primary':
      case 'secondary':
      case 'error':
        return 'var(--mwc-theme-on-primary, #ffffff)'; // Assuming dark backgrounds for these
      default:
        return 'var(--mwc-theme-on-surface-variant, #000000)'; // Assuming light background for default
    }
  };

  const displayedContent = variant === 'dot' ? '' : (badgeContent > max ? `${max}+` : badgeContent);
  const isZero = badgeContent === 0 && variant === 'standard';
  const isHidden = isZero && !props.showZero; // MUI's showZero prop, implement if needed

  if (isHidden) {
    return <>{children}</>;
  }

  const wrapperStyle = {
    position: 'relative',
    display: 'inline-flex', // So it wraps the child tightly
    ...style, // Merge with passed styles
  };

  const badgeStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    backgroundColor: getBackgroundColor(),
    color: getTextColor(),
    borderRadius: '10px', // Fully rounded
    zIndex: 1, // Above child
    ...(variant === 'dot'
      ? {
          width: '8px',
          height: '8px',
          minWidth: '8px', // ensure dot size
          padding: '0',
        }
      : {
          minWidth: '20px',
          height: '20px',
          padding: '0 6px',
          fontSize: '0.75rem',
        }),
  };

  return (
    <div style={wrapperStyle} className={`badge-atom-wrapper ${className || ''}`} {...props}>
      {children}
      {badgeContent !== null && badgeContent !== undefined && (
        <span style={badgeStyle} className="badge-atom-content">
          {displayedContent}
        </span>
      )}
    </div>
  );
};

export default BadgeAtom;
