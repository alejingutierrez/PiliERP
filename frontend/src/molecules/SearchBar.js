import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextInput from '../atoms/TextInput';

const SearchBar = ({ placeholder, ...props }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', ...props.sx }}>
    <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
    <TextInput fullWidth placeholder={placeholder} {...props} />
  </Box>
);

export default SearchBar;
