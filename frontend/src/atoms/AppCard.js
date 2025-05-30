import React from 'react';
import PropTypes from 'prop-types';
import { MWCElevatedCard } from '../mwc_wrappers/MWCElevatedCard';

/**
 * AppCard is a general purpose card component using MWCElevatedCard.
 * It applies consistent padding and allows for additional styling.
 */
const AppCard = ({ children, sx = {}, style = {}, ...props }) => {
  // Extract specific style properties that were handled by the inner div
  // Default padding to 16px if not specified in sx.
  const { p, padding: sxPadding, backgroundColor: sxBackgroundColor, ...otherSx } = sx;

  // Determine final padding for the inner div
  let finalPadding = '16px'; // Default
  if (sxPadding) {
    finalPadding = typeof sxPadding === 'number' ? `${sxPadding}px` : sxPadding;
  }
  if (p) { // p prop (theme spacing multiplier) overrides padding
    finalPadding = `${p * 4}px`; // Assuming theme.spacing was 4
  }

  // Combine otherSx from sx prop and the direct style prop for the wrapper
  const wrapperStyles = { ...otherSx, ...style };

  // The MWCElevatedCard itself will receive other props directly.
  // The sx prop is mostly deprecated in favor of direct `style` or CSS classes.
  // We are preserving the inner div for padding and background color control,
  // as this was the previous behavior.

  return (
    <MWCElevatedCard style={wrapperStyles} {...props}>
      <div style={{ padding: finalPadding, backgroundColor: sxBackgroundColor }}>
        {children}
      </div>
    </MWCElevatedCard>
  );
};

AppCard.propTypes = {
  /**
   * Content of the card.
   */
  children: PropTypes.node,
  /**
   * SX prop for MUI-like styling. Some properties (padding, backgroundColor)
   * are applied to an inner div. Others are passed as `style` to the wrapper.
   * Consider migrating to direct `style` prop or CSS classes.
   */
  sx: PropTypes.object,
  /**
   * Standard React style prop for the MWCElevatedCard wrapper.
   */
  style: PropTypes.object,
};

export default AppCard;
