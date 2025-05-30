import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckboxInput = (props) => (
  <Checkbox
    color="primary"
    sx={{
      '& .MuiSvgIcon-root': { fontSize: 20 },
      ...props.sx,
    }}
    {...props}
  />
);

export default CheckboxInput;
