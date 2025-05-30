import React from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';
import MuiCircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressIndicatorAtom = ({
  type = 'linear',
  variant = 'indeterminate',
  value,
  color = 'primary',
  size, // Applicable for CircularProgress
  showLabel = false,
  ...props
}) => {
  const isDeterminate = variant === 'determinate';
  const displayLabel = isDeterminate && showLabel && value != null;

  if (type === 'linear') {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box sx={{ width: '100%', mr: displayLabel ? 1 : 0 }}>
          <MuiLinearProgress
            variant={variant}
            value={isDeterminate ? value : undefined}
            color={color}
            {...props}
          />
        </Box>
        {displayLabel && (
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              value,
            )}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  if (type === 'circular') {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <MuiCircularProgress
          variant={variant}
          value={isDeterminate ? value : undefined}
          color={color}
          size={size}
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
            >{`${Math.round(value)}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  return null; // Should not happen if type is always 'linear' or 'circular'
};

export default ProgressIndicatorAtom;
