import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'size',
})(({ theme, size }) => {
  let finalSize;
  if (typeof size === 'number') {
    finalSize = theme.typography.pxToRem(size);
  } else {
    switch (size) {
      case 'small':
        finalSize = theme.typography.pxToRem(24);
        break;
      case 'large':
        finalSize = theme.typography.pxToRem(56);
        break;
      case 'medium':
      default:
        finalSize = theme.typography.pxToRem(40);
        break;
    }
  }
  return {
    width: finalSize,
    height: finalSize,
    // fontSize is important for text avatars
    fontSize: `calc(${finalSize} / 2)`, // Adjust font size based on avatar size
  };
});

const AvatarAtom = ({ src, alt, size = 'medium', children, ...props }) => {
  return (
    <StyledAvatar src={src} alt={alt} size={size} {...props}>
      {children}
    </StyledAvatar>
  );
};

export default AvatarAtom;
