// frontend/src/__mocks__/@material/web/button/filled-button.js
import React from 'react';
// eslint-disable-next-line react/display-name
export default ({ children, onClick, ...props }) => (
  <button data-testid="md-filled-button" onClick={onClick} {...props}>
    {children}
  </button>
);
