import React from 'react';
import PropTypes from 'prop-types';
import { MWCElevatedCard } from '../mwc_wrappers/MWCElevatedCard'; // Adjusted import path
import { MWCFilledButton } from '../mwc_wrappers/MWCFilledButton';   // Adjusted import path

// Note: The direct MWC imports like '@material/web/labs/card/elevated-card.js'
// are no longer needed here as they are handled by the wrapper components.

const MaterialCard = ({ title, content, actionText, onActionClick, children }) => {
  // Removed useRef and useEffect for manual event listeners.
  // Event handling is now done via props on the wrapped components.

  return (
    <MWCElevatedCard>
      <div style={{ padding: '16px' }}> {/* Existing padding, can be reviewed later if MWC card has built-in padding options */}
        {title && <h3>{title}</h3>}
        {content && <p>{content}</p>}
        {children} {/* Allow children to be passed through */}
        {actionText && onActionClick && (
          <div style={{ marginTop: '16px', textAlign: 'right' }}> {/* Existing layout styling */}
            <MWCFilledButton onClick={onActionClick}>
              {actionText}
            </MWCFilledButton>
          </div>
        )}
      </div>
    </MWCElevatedCard>
  );
};

MaterialCard.propTypes = {
  title: PropTypes.string, // No longer required, can be optional
  content: PropTypes.string, // No longer required, can be optional
  children: PropTypes.node, // Added to allow more flexible content
  actionText: PropTypes.string,
  onActionClick: PropTypes.func,
};

export default MaterialCard;
