import React from 'react';
import '@material/web/icon/icon.js';
import TextInput from '../atoms/TextInput';

const SearchBar = ({ placeholder, sx, ...props }) => (
  <div style={{ display: 'flex', alignItems: 'center', width: '100%', ...sx }}>
    <md-icon style={{ marginRight: '8px', color: 'var(--md-sys-color-on-surface-variant)' }}>search</md-icon>
    <TextInput style={{ flexGrow: 1 }} placeholder={placeholder} {...props} />
  </div>
);

export default SearchBar;
