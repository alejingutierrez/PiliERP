import React from 'react';
import PropTypes from 'prop-types';
import { MWCElevatedCard } from '../mwc_wrappers/MWCElevatedCard';

/**
 * AppCard is a general purpose card component using MWCElevatedCard.
 * Styling should be applied via the `style` prop or external CSS classes.
 */
const AppCard = ({ children, style = {}, ...props }) => {
  // The MWCElevatedCard itself will receive style and other props directly.
  // The sx prop has been removed.
  // Padding and other layout styles should be handled by the consumer
  // or via the `style` prop on AppCard/MWCElevatedCard.

  return (
    <MWCElevatedCard style={style} {...props}>
      {children}
    </MWCElevatedCard>
  );
};

AppCard.propTypes = {
  /**
   * Content of the card.
   */
  children: PropTypes.node,
  /**
   * Standard React style prop for the MWCElevatedCard.
   * Use this for custom styling instead of the removed `sx` prop.
   */
  style: PropTypes.object,
};

export default AppCard;
