import React from 'react';

// Keyframes for animations
const pulseKeyframes = `
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

const waveKeyframes = `
  @keyframes wave {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const SkeletonAtom = ({
  variant = 'text', // 'text', 'circular', 'rectangular', 'rounded'
  width,
  height,
  animation = 'pulse', // 'pulse', 'wave', false
  fontSize, // For text variant, influences height if height not set
  style: userStyle, // Renamed from sx to style
  className,
  count = 1, // Number of skeleton lines for text variant
  ...props
}) => {
  const baseStyle = {
    backgroundColor: 'var(--mwc-theme-surface-variant, rgba(0,0,0,0.11))', // Default skeleton color
    display: 'block', // Default display
  };

  if (animation === 'pulse') {
    baseStyle.animation = 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
  } else if (animation === 'wave') {
    baseStyle.position = 'relative';
    baseStyle.overflow = 'hidden';
    // Wave effect often uses a pseudo-element for the moving gradient
    // This is a simplified inline style version, a pseudo-element would be better.
    // For a true wave, you'd add a ::after element with a gradient and animate its transform.
    // This simplified version just adds a placeholder to indicate 'wave' was selected.
    baseStyle.setProperty('--wave-gradient', 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)');
    baseStyle.backgroundRepeat = 'no-repeat';
    baseStyle.backgroundSize = '200px 100%'; // Adjust size of wave
    baseStyle.animation = 'wave 2s linear infinite'; // Placeholder, real wave needs ::after
  }


  let finalStyle = { ...baseStyle };

  if (variant === 'text') {
    finalStyle.height = height || fontSize || '1em'; // Default height for text
    finalStyle.marginTop = '0.2em';
    finalStyle.marginBottom = '0.2em';
    if (!width) { // Typical text skeleton behavior
        finalStyle.width = '100%';
        // For multiple lines, the last line is often shorter
        // This will be handled by the loop rendering multiple skeletons
    } else {
        finalStyle.width = width;
    }
    // 'text' often implies rounded ends, but not as much as 'rounded' variant
    finalStyle.borderRadius = 'var(--md-sys-shape-corner-extra-small, 4px)';
  } else if (variant === 'circular') {
    finalStyle.width = width || height || '40px'; // Default size for circular
    finalStyle.height = height || width || '40px';
    finalStyle.borderRadius = '50%';
  } else if (variant === 'rectangular') {
    finalStyle.width = width || '100%';
    finalStyle.height = height || '100%';
    // No specific borderRadius for rectangular
  } else if (variant === 'rounded') {
    finalStyle.width = width || '100%';
    finalStyle.height = height || '100%';
    finalStyle.borderRadius = 'var(--md-sys-shape-corner-medium, 12px)'; // More pronounced rounding
  }

  finalStyle = { ...finalStyle, ...userStyle }; // Allow user to override

  const renderSkeletons = () => {
    if (variant === 'text' && count > 1) {
      return Array.from({ length: count }).map((_, index) => {
        const lineStyle = {...finalStyle};
        if (index === count - 1 && count > 1 && (!width || width === '100%')) { // Last line is shorter
          lineStyle.width = '60%';
        }
        // Add a small gap between text lines
        if (index > 0) lineStyle.marginTop = '0.5em';
        return (
          <div
            key={index}
            style={lineStyle}
            className={`skeleton-atom ${className || ''}`}
            {...props}
          />
        );
      });
    }
    return (
      <div
        style={finalStyle}
        className={`skeleton-atom ${className || ''}`}
        {...props}
      />
    );
  };

  return (
    <>
      <style>{pulseKeyframes}{waveKeyframes}</style> {/* Inject keyframes */}
      {renderSkeletons()}
    </>
  );
};

export default SkeletonAtom;
