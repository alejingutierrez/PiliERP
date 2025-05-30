import React from 'react';
import { MdLinearProgress } from '@material/web/progress/linear-progress.js'; // Corrected import path
import { MdCircularProgress } from '@material/web/progress/circular-progress.js'; // Corrected import path

const ProgressIndicatorAtom = ({
  type = 'linear',
  variant = 'indeterminate', // MWC auto-detects based on value prop
  value, // MUI is 0-100, MWC is 0-1
  color = 'primary', // MWC defaults to primary, secondary needs custom props
  size, // Applicable for CircularProgress (MUI: number, MWC: CSS var --md-circular-progress-size)
  thickness, // Applicable for CircularProgress (MUI: number, MWC: CSS var --md-circular-progress-active-indicator-width)
  showLabel = false,
  style, // Changed from sx to style for standard HTML attributes
  ...props // other props
}) => {
  const isDeterminate = variant === 'determinate' && value != null;
  const displayLabel = isDeterminate && showLabel;
  const mwcValue = isDeterminate ? value / 100 : undefined;

  // Define styles for MWC components based on props
  const mwcComponentStyle = {}; // Separate style for the MWC component itself
  // Apply color to MWC component
  if (color === 'secondary') {
    mwcComponentStyle['--md-sys-color-primary'] = 'var(--mwc-theme-secondary, #2C6ECB)';
  }

  const labelStyle = {
    fontSize: type === 'circular' ? '0.75rem' : '0.875rem', // caption for circular, body2 for linear
    color: 'var(--mwc-theme-on-surface-variant, #6D7175)', // text.secondary
    fontFamily: 'var(--mwc-theme-font-family, Inter, sans-serif)',
  };

  if (type === 'linear') {
    const linearContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      ...style, // Apply passed 'style' to the outer container
    };
    const progressWrapperStyle = {
      width: '100%',
      marginRight: displayLabel ? '8px' : '0', // MUI mr: 1 is 8px with default 8px spacing
    };
    const labelContainerStyle = {
      minWidth: '35px', // From original Box
    };

    return (
      <div style={linearContainerStyle}>
        <div style={progressWrapperStyle}>
          <MdLinearProgress
            value={mwcValue}
            indeterminate={!isDeterminate}
            style={mwcComponentStyle} // Apply color overrides here
            {...props}
          />
        </div>
        {displayLabel && (
          <div style={labelContainerStyle}>
            <span style={labelStyle}>{`${Math.round(
              value || 0,
            )}%`}</span>
          </div>
        )}
      </div>
    );
  }

  if (type === 'circular') {
    const circularContainerStyle = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style, // Apply passed 'style' to the outer container
    };

    // Combine mwcComponentStyle with size/thickness for the MWC component
    const circularComponentActualStyle = { ...mwcComponentStyle };
    if (size) {
      circularComponentActualStyle['--md-circular-progress-size'] = typeof size === 'number' ? `${size}px` : size;
    }
    if (thickness) {
      circularComponentActualStyle['--md-circular-progress-active-indicator-width'] = typeof thickness === 'number' ? `${thickness}px` : thickness;
    }

    const circularLabelOuterStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div style={circularContainerStyle}>
        <MdCircularProgress
          value={mwcValue}
          indeterminate={!isDeterminate}
          style={circularComponentActualStyle} // Apply color, size, thickness here
          {...props}
        />
        {displayLabel && (
          <div style={circularLabelOuterStyle}>
            <span style={labelStyle}>{`${Math.round(value || 0)}%`}</span>
          </div>
        )}
      </div>
    );
  }

  return null; // Should not happen if type is always 'linear' or 'circular'
};

export default ProgressIndicatorAtom;
