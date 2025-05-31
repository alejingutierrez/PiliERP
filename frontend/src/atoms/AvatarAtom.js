import React from 'react';
import { MdIcon } from '@material/web/icon/md-icon.js';

// DESIGN_GUIDELINES.md colors for reference:
// Primary Contrast Text (`primary.contrastText`): `#FFFFFF`
// Text Secondary (`text.secondary`): `#6D7175` (using as default background for letter/icon avatars)
// Global Border Radius (`shape.borderRadius`): `10px`

const AvatarAtom = ({
  alt,
  children,
  icon, // New prop for Material Symbol name or SVG element
  src,
  srcSet,
  imgProps,
  variant = 'circular', // 'circular', 'rounded', 'square'
  size = 'medium', // 'small', 'medium', 'large', or number (pixels)
  customStyles = {},
  ...props
}) => {
  let displaySize = '40px';
  let letterIconFontSize = '20px';

  if (typeof size === 'number') {
    displaySize = `${size}px`;
    letterIconFontSize = `${Math.floor(size / 2)}px`;
  } else {
    switch (size) {
      case 'small':
        displaySize = '24px';
        letterIconFontSize = '12px';
        break;
      case 'large':
        displaySize = '56px';
        letterIconFontSize = '28px';
        break;
      case 'medium':
      default:
        displaySize = '40px';
        letterIconFontSize = '20px';
        break;
    }
  }

  const baseStyle = {
    width: displaySize,
    height: displaySize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensure content like images respect border radius
    ...customStyles, // customStyles should be applied first to be overridable by specific logic below
  };

  if (variant === 'circular') {
    baseStyle.borderRadius = '50%';
  } else if (variant === 'rounded') {
    baseStyle.borderRadius = customStyles.borderRadius || 'var(--md-sys-shape-corner-medium)'; // Guideline or customStyles override
  } else { // square
    baseStyle.borderRadius = customStyles.borderRadius || '0px';
  }

  // Default background and text colors for letter/icon avatars
  // These can be overridden by customStyles if customStyles includes backgroundColor or color
  const defaultBgColor = customStyles.backgroundColor || 'var(--md-sys-color-surface-container-highest)'; // text.secondary from guidelines
  const defaultTextColor = customStyles.color || 'var(--md-sys-color-primary)'; // primary.contrastText from guidelines


  if (src) {
    return (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        style={baseStyle} // borderRadius will apply due to overflow:hidden on parent or direct on img
        {...imgProps}
        {...props}
      />
    );
  } else if (icon) {
    const iconStyle = {
      fontSize: letterIconFontSize, // For Material Symbols font icons
      '--md-icon-size': letterIconFontSize, // For MdIcon component size
      color: defaultTextColor, // Default icon color, customStyles can override
      ...customStyles.iconStyles, // Allow passing styles directly to icon via customStyles
    };
    return (
      <div style={{ ...baseStyle, backgroundColor: defaultBgColor, color: defaultTextColor }} {...props}>
        {typeof icon === 'string' ? <MdIcon style={iconStyle}>{icon}</MdIcon> : icon}
      </div>
    );
  } else {
    let letter = '';
    if (typeof children === 'string' && children.trim().length > 0) {
      letter = children.trim().charAt(0).toUpperCase();
    } else if (typeof alt === 'string' && alt.trim().length > 0) {
      letter = alt.trim().charAt(0).toUpperCase();
    }

    if (letter) {
      return (
        <div style={{ ...baseStyle, backgroundColor: defaultBgColor, color: defaultTextColor, fontSize: letterIconFontSize, lineHeight: displaySize }} {...props}>
          {letter}
        </div>
      );
    } else {
      // Fallback to a default icon if no src, icon, children, or alt provide content
      const fallbackIconStyle = { fontSize: letterIconFontSize, '--md-icon-size': letterIconFontSize, color: defaultTextColor };
      return (
        <div style={{ ...baseStyle, backgroundColor: defaultBgColor, color: defaultTextColor }} {...props}>
          <MdIcon style={fallbackIconStyle}>person</MdIcon> {/* Default fallback icon */}
        </div>
      );
    }
  }
};

export default AvatarAtom;
