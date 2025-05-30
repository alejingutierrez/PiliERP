import React from 'react';
import { MdLinearProgress } from '@material/web/progress/md-linear-progress.js';
import { MdCircularProgress } from '@material/web/progress/md-circular-progress.js';
import Typography from '@mui/material/Typography'; // Keep for now
import Box from '@mui/material/Box'; // Keep for now

const ProgressIndicatorAtom = ({
  type = 'linear',
  variant = 'indeterminate', // MWC auto-detects based on value prop
  value, // MUI is 0-100, MWC is 0-1
  color = 'primary', // MWC defaults to primary, secondary needs custom props
  size, // Applicable for CircularProgress (MUI: number, MWC: CSS var --md-circular-progress-size)
  thickness, // Applicable for CircularProgress (MUI: number, MWC: CSS var --md-circular-progress-active-indicator-width)
  showLabel = false,
  sx, // sx from props, to be applied as style if possible
  ...props // other props
}) => {
  const isDeterminate = variant === 'determinate' && value != null;
  const displayLabel = isDeterminate && showLabel;
  const mwcValue = isDeterminate ? value / 100 : undefined;

  // Define styles for MWC components based on props
  const mwcStyle = { ...sx }; // Start with sx from props
  if (color === 'secondary') {
    // This is a simplification. Ideally, use theme variables.
    mwcStyle['--md-sys-color-primary'] = '#2C6ECB'; // Secondary color from guidelines
    // Or more specific:
    // mwcStyle['--md-linear-progress-active-indicator-color'] = '#2C6ECB';
    // mwcStyle['--md-circular-progress-active-indicator-color'] = '#2C6ECB';
  }

  if (type === 'linear') {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box sx={{ width: '100%', mr: displayLabel ? 1 : 0 }}>
          <MdLinearProgress
            value={mwcValue}
            indeterminate={!isDeterminate}
            style={mwcStyle}
            {...props}
          />
        </Box>
        {displayLabel && (
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              value || 0, // Ensure value is not null for Math.round
            )}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  if (type === 'circular') {
    const circularStyle = { ...mwcStyle };
    if (size) {
      circularStyle['--md-circular-progress-size'] = typeof size === 'number' ? `${size}px` : size;
    }
    if (thickness) {
      // MWC default is 4px. MUI default is 3.6px.
      circularStyle['--md-circular-progress-active-indicator-width'] = typeof thickness === 'number' ? `${thickness}px` : thickness;
    }

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <MdCircularProgress
          value={mwcValue}
          indeterminate={!isDeterminate}
          style={circularStyle}
          {...props}
        />
        {displayLabel && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >{`${Math.round(value || 0)}%`}</Typography> {/* Ensure value is not null */}
          </Box>
        )}
      </Box>
    );
  }

  return null; // Should not happen if type is always 'linear' or 'circular'
};

export default ProgressIndicatorAtom;
