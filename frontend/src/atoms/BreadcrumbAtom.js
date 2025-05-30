import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// No specific styling needed with `styled` for this atom initially,
// as MUI Breadcrumbs handles most styling and theming.
// If specific overrides are needed later, `styled` can be added.

const BreadcrumbAtom = ({
  children,
  separator, // User can provide a custom separator
  maxItems,
  ...props // To pass any other valid MuiBreadcrumbs props
}) => {
  // Define a default separator if none is provided
  const defaultSeparator = <NavigateNextIcon fontSize="small" />;

  return (
    <MuiBreadcrumbs
      separator={separator !== undefined ? separator : defaultSeparator}
      maxItems={maxItems}
      {...props}
    >
      {children}
    </MuiBreadcrumbs>
  );
};

export default BreadcrumbAtom;
