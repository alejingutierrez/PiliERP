import React from 'react';
import PropTypes from 'prop-types';
// Imports moved to src/index.js

const MaterialCard = ({ title, content, actionText, onActionClick }) => {
  return (
    <md-elevated-card>
      <div style={{ padding: '16px' }}>
        <h3>{title}</h3>
        <p>{content}</p>
        {actionText && onActionClick && (
          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <md-filled-button onClick={onActionClick}>
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
