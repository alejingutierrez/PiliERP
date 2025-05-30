import React, { useRef, useEffect } from 'react';
import '@material/web/labs/card/elevated-card.js';

const AppCard = ({ children, sx = {}, ...props }) => {
  const cardRef = useRef(null);

  // Extract padding and other styles from sx.
  // Default padding to 16px (theme.spacing(4)) if not specified in sx.
  const { p, padding = '16px', backgroundColor, ...otherSx } = sx;

  // If p is provided, it overrides padding. Assume p is a number like mui.
  const finalPadding = p ? `${p * 4}px` : padding;

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      // Apply any additional props to the web component
      Object.entries(props).forEach(([key, value]) => {
        if (key !== 'children' && key !== 'sx') {
          cardElement.setAttribute(key, value);
        }
      });

      // Apply other styles from sx to the card element
      Object.entries(otherSx).forEach(([key, value]) => {
        cardElement.style[key] = value;
      });
    }
  }, [props, otherSx]);

  return (
    <md-elevated-card ref={cardRef}>
      <div style={{ padding: finalPadding, backgroundColor }}>
        {children}
      </div>
    </md-elevated-card>
  );
};

export default AppCard;
