import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';

// No specific styling needed with `styled` for this atom initially,
// as MUI Skeleton handles props directly and themes accordingly.
// The 'rounded' variant is available in MUI v5+.

const SkeletonAtom = ({
  variant = 'text', // 'text', 'circular', 'rectangular', 'rounded'
  width,
  height,
  animation = 'pulse', // 'pulse', 'wave', false
  fontSize, // For text variant, influences height if height not set
  ...props // To pass any other valid MuiSkeleton props
}) => {
  const theme = useTheme();
  let sx = { ...props.sx }; // Preserve any sx prop passed by the user

  if (variant === 'text' && fontSize) {
    // MUI Skeleton text variant by default infers its height from the surrounding typography.
    // If an explicit fontSize is given and height is not, we can set it.
    // However, MUI's <Skeleton variant="text" /> already does a good job adapting.
    // Explicitly setting height via sx if fontSize is provided and height isn't might be redundant
    // or could conflict if not handled carefully.
    // For now, we'll let MUI handle text height inference. If more control is needed,
    // this is where it would be added.
    // sx.fontSize = fontSize; // This would set font-size of the skeleton itself if it rendered text
  }

  // If 'rounded' variant wasn't available, we'd do something like:
  // if (variant === 'rectangular' && props.rounded) { // Assuming a custom 'rounded' prop
  //   sx.borderRadius = theme.shape.borderRadius;
  // }
  // But since 'rounded' is a standard variant in MUI v5+, this is not needed.

  return (
    <MuiSkeleton
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      sx={sx}
      {...props}
    />
  );
};

export default SkeletonAtom;
