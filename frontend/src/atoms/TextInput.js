import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ ...props }) => (
  <TextField
    variant="outlined"
    size="small"
    {...props}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: 4,
        backgroundColor: 'background.paper',
      },
      ...props.sx,
    }}
  />
);

export default TextInput;
