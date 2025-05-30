import React from 'react';
import PropTypes from 'prop-types';
import { MdElevatedCard, MdFilledButton } from '@material/web/all.js';

const MaterialCard = ({ title, content, actionText, onActionClick }) => {
  return (
    <MdElevatedCard>
      <div style={{ padding: '16px' }}>
        <h3>{title}</h3>
        <p>{content}</p>
        {actionText && onActionClick && (
          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <MdFilledButton onClick={onActionClick}>
              {actionText}
            </MdFilledButton>
          </div>
        )}
      </div>
    </MdElevatedCard>
  );
};

MaterialCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionText: PropTypes.string,
  onActionClick: PropTypes.func,
};

export default MaterialCard;
