import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ ...props }) => (
  <TextField
    variant="outlined"
    size="small"
    {...props}
    sx={{
      '& .MuiOutlinedInput-root': {
        height: 36,
        borderRadius: 6,
        backgroundColor: 'background.paper',
        '& fieldset': {
          borderColor: '#C4C4C4',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#5C6AC4',
          borderWidth: 2,
        },
      },
      '& input::placeholder': {
        color: '#979797',
        opacity: 1,
      },
      ...props.sx,
    }}
  />
);

export default TextInput;
