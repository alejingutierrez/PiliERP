import React from 'react';
import TextInput from '../atoms/TextInput'; // Assuming TextInput is already MWC compatible or will be adapted
import '@material/web/icon/icon.js'; // Import for md-icon

const HeaderSearchBar = ({ placeholder = 'Buscar', style, ...props }) => {
  // Define the styles for the wrapper div
  const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 372, // Max width
    width: '100%',  // Responsive width
    height: '36px',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF', // Assuming this specific white is desired, not from theme
    color: 'var(--md-sys-color-on-surface)', // MWC theme variable for text
    ...style, // Allow overriding or extending via props
  };

  // Styles for the TextInput
  // It should fill the available space and have appropriate text/placeholder colors
  const textInputStyle = {
    flexGrow: 1,
    color: 'var(--md-sys-color-on-surface)',
    backgroundColor: 'transparent', // Ensure no unwanted background
    border: 'none',                 // Remove default borders
    outline: 'none',                // Remove outline on focus
    // Placeholder color is typically handled by the TextInput component itself
    // or via ::placeholder CSS pseudo-element in a global stylesheet or mwc_theme.css
  };

  return (
    <div style={wrapperStyle} {...props}>
      <md-icon style={{ marginRight: '8px', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '20px' }}>search</md-icon>
      <TextInput
        placeholder={placeholder}
        style={textInputStyle}
        // fullWidth is removed, width is controlled by flexGrow in textInputStyle
        // InputProps is removed as it's MUI specific
      />
    </div>
  );
};

export default HeaderSearchBar;
