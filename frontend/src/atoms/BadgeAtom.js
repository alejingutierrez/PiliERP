import React from 'react';

const BadgeAtom = ({
  badgeContent,
  color = 'default', // 'default', 'primary', 'secondary', 'error'
  variant = 'standard', // 'standard', 'dot'
  max = 99,
  children,
  style, // Allow parent to pass custom styles
  className, // Allow parent to pass custom classes
  showZero = false,
  ...props
}) => {
  const getBackgroundColor = () => {
    switch (color) {
      case 'primary':
        return 'var(--md-sys-color-primary)';
      case 'secondary':
        return 'var(--md-sys-color-secondary)';
      case 'error':
        return 'var(--md-sys-color-error)';
      default: // 'default' or any other value
        return 'var(--md-sys-color-tertiary)';
    }
  };

  const getTextColor = () => {
    switch (color) {
      case 'primary':
        return 'var(--md-sys-color-on-primary)';
      case 'secondary':
        return 'var(--md-sys-color-on-secondary)';
      case 'error':
        return 'var(--md-sys-color-on-error)';
      default:
        return 'var(--md-sys-color-on-tertiary)';
    }
  };

  const displayedContent = variant === 'dot' ? '' : (badgeContent > max ? `${max}+` : badgeContent);
  const isZero = badgeContent === 0 && variant === 'standard';
  const isHidden = isZero && !showZero; // MUI's showZero prop, implement if needed

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
    borderRadius: variant === 'dot' ? '50%' : 'var(--md-sys-shape-corner-full)', // Fully rounded
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
