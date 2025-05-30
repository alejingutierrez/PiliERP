import React from 'react';
import { MdDivider } from '@material/web/divider/md-divider.js';

// Note: MdDivider does not support children or textAlign props like MuiDivider.
// This version of DividerAtom will render a visual divider only.
// If text within the divider is needed, a different component/approach is required.

const DividerAtom = ({
  orientation = 'horizontal',
  variant = 'fullWidth', // 'fullWidth', 'inset', 'middle'
  // textAlign and children props are intentionally omitted as MdDivider does not support them.
  sx = {}, // sx from props
  light, // MUI light prop
  ...props // To pass any other valid MdDivider props (e.g., from a library that adds them)
}) => {
  const style = {
    // Set color from DESIGN_GUIDELINES.md (divider: '#E0E0E0')
    // The 'light' prop from MUI could adjust this, but for now, we use the guideline color.
    '--md-divider-color': light ? 'rgba(0, 0, 0, 0.08)' : '#E0E0E0', // Example for light, actual light color may vary
    ...sx, // Spread sx from props, allowing overrides
  };

  // Map MUI variant to MdDivider props
  let inset = false;
  let insetStart = false;
  let insetEnd = false;

  if (variant === 'inset') {
    inset = true;
  } else if (variant === 'middle') {
    // MdDivider's 'inset' is from one side. 'middle' in MUI implies some spacing on both.
    // We can use insetStart and insetEnd, or rely on margins from sx.
    // For simplicity, 'middle' could also just use 'inset' if precise spacing isn't critical,
    // or require users to pass margins via sx for true "middle" appearance.
    // Using insetStart and insetEnd for a more distinct "middle" if supported,
    // otherwise, MdDivider's `inset` prop provides some spacing.
    // However, MdDivider docs show only 'inset'. Let's map 'middle' to 'inset' as well.
    inset = true;
    // If more control is needed, this component would need to be more complex or users use sx.
  }
  // 'fullWidth' is default for MdDivider if no inset props are true.

  return (
    <MdDivider
      orientation={orientation}
      inset={inset}
      // inset-start and inset-end are not standard props on MdDivider.
      // Use 'inset' for both 'inset' and 'middle' variants from MUI.
      style={style}
      {...props} // Spread other props
    />
  );
};

export default DividerAtom;
