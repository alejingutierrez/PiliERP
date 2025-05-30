import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextInput from '../atoms/TextInput';

const HeaderSearchBar = ({ placeholder = 'Buscar', ...props }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: { xs: '100%', sm: 372 },
      height: 36,
      px: 1,
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      color: 'text.primary',
      ...props.sx,
    }}
  >
    <SearchIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
    <TextInput
      fullWidth
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
        sx: {
          color: 'text.primary',
          '& .MuiOutlinedInput-notchedOutline': { border: 0 },
          '& input::placeholder': {
            color: 'text.placeholder',
            opacity: 1,
          },
        },
      }}
      {...props}
    />
  </Box>
);

export default HeaderSearchBar;
