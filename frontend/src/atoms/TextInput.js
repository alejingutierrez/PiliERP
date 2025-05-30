import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ ...props }) => (
  <TextField
    variant="outlined"
    size="small"
    {...props}
    sx={{
      // borderRadius removed to inherit from MuiTextField styleOverrides in theme
      ...props.sx,
    }}
  />
);

export default TextInput;
