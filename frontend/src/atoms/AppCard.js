import React from 'react';
import { MdElevatedCard } from '@material/web/all.js';

const AppCard = ({ children, sx = {}, ...props }) => {
  // Extract padding and other styles from sx.
  // Default padding to 16px (theme.spacing(4)) if not specified in sx.
  // Material Web Components typically don't use an 'sx' prop.
  // We'll apply padding to an inner div. Other sx props might need specific handling
  // or might not be directly applicable. For now, focus on padding.
  const { p, padding = '16px', backgroundColor, ...otherSx } = sx;

  // If p is provided, it overrides padding. Assume p is a number like mui.
  // This simple conversion might need refinement based on expected 'p' values.
  const finalPadding = p ? `${p * 4}px` : padding;

  // MdElevatedCard does not support sx prop directly.
  // Pass through other props. For styling, use inline styles on a wrapper or direct props if available.
  // The backgroundColor from sx is also not directly applicable. MdElevatedCard uses its own theme.
  // We will apply otherSx as inline style to the card for now, but this is not ideal.
  return (
    <MdElevatedCard {...props} style={otherSx}>
      <div style={{ padding: finalPadding, backgroundColor }}>
        {children}
      </div>
    </MdElevatedCard>
  );
};

export default AppCard;
