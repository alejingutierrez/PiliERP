import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '@material/web/labs/card/elevated-card.js';
import '@material/web/button/filled-button.js';

const MaterialCard = ({ title, content, actionText, onActionClick }) => {
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (buttonElement && onActionClick) {
      buttonElement.addEventListener('click', onActionClick);
      return () => {
        buttonElement.removeEventListener('click', onActionClick);
      };
    }
  }, [onActionClick]);

  return (
    <md-elevated-card ref={cardRef}>
      <div style={{ padding: '16px' }}>
        <h3>{title}</h3>
        <p>{content}</p>
        {actionText && onActionClick && (
          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <md-filled-button ref={buttonRef}>
              {actionText}
            </md-filled-button>
          </div>
        )}
      </div>
    </md-elevated-card>
  );
};

MaterialCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionText: PropTypes.string,
  onActionClick: PropTypes.func,
};

export default MaterialCard;
