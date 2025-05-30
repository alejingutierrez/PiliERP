import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextInput from '../atoms/TextInput';

const HeaderSearchBar = ({ placeholder = 'Buscar', ...props }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: { xs: '100%', sm: 280, md: 650 },
      height: 32,
      px: 1,
      borderRadius: 16,
      backgroundColor: 'rgba(48,48,48,0.8)',
      color: '#FFFFFF',
      ...props.sx,
    }}
  >
    <SearchIcon sx={{ mr: 1 }} />
    <TextInput
      fullWidth
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
        sx: { color: '#FFFFFF', '& .MuiOutlinedInput-notchedOutline': { border: 0 } },
      }}
      {...props}
    />
  </Box>
);

export default HeaderSearchBar;
