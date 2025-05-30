import React from 'react';
import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

// It's possible to customize the Chip further if needed,
// but MUI's Chip with color prop might be sufficient.
// For a more "subtle" appearance, we ensure specific variants and props are used.
const StyledTag = styled(MuiChip)(({ theme, ownerState }) => ({
  // The `color` prop on MuiChip handles theming for 'primary', 'secondary', etc.
  // We are primarily setting defaults for size and ensuring it's not interactive.
  // If a more custom subtle appearance is needed, we can override styles here.
  // For example, adjusting opacity or specific background/text colors for 'default'.
  ...(ownerState.color === 'default' && {
    backgroundColor: theme.palette.grey[300], // A common subtle default color
    color: theme.palette.getContrastText(theme.palette.grey[300]),
  }),
  // Ensure the tag is not overly large
  height: 'auto', // Let padding define height based on font
  lineHeight: theme.typography.pxToRem(18), // Adjust for small size
  padding: theme.spacing(0.25, 0.75), // Smaller padding
  fontSize: theme.typography.pxToRem(12), // Smaller font size
}));

const TagAtom = ({
  label,
  color = 'default', // 'primary', 'secondary', 'error', 'warning', 'success', 'default'
  ...props // Allow passing other valid Chip props if ever needed, but keep it minimal for a "tag"
}) => {
  return (
    <StyledTag
      label={label}
      color={color !== 'default' ? color : undefined} // Pass color if not default, otherwise let StyledTag handle default
      ownerState={{ color }}
      size="small" // MUI's Chip size="small" is a good starting point
      variant="filled" // "filled" is common for tags
      // Not passing onClick, onDelete, etc., makes it non-interactive by default
      {...props}
    />
  );
};

export default TagAtom;
