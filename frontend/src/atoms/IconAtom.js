import React, { lazy, Suspense } from 'react';
import { styled } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';

const StyledSvgIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== 'ownerState',
})(({ theme, ownerState }) => ({
  color: theme.palette[ownerState.color]?.main || theme.palette.text.primary,
  fontSize: ownerState.size === 'small' ? theme.typography.pxToRem(20) :
            ownerState.size === 'medium' ? theme.typography.pxToRem(24) :
            ownerState.size === 'large' ? theme.typography.pxToRem(35) :
            typeof ownerState.size === 'number' ? theme.typography.pxToRem(ownerState.size) :
            theme.typography.pxToRem(24), // Default to medium
}));

const IconAtom = ({ icon, color = 'inherit', size = 'medium' }) => {
  if (!icon) {
    return null;
  }

  const IconComponent = lazy(() =>
    import(`@mui/icons-material/${icon}`).catch(() => {
      // Fallback to a default icon or handle the error appropriately
      console.error(`Icon "${icon}" not found.`);
      return import('@mui/icons-material/HelpOutline'); // Example fallback
    })
  );

  const ownerState = { color, size };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyledSvgIcon ownerState={ownerState} component={IconComponent} />
    </Suspense>
  );
};

export default IconAtom;
