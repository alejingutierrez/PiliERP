import React, { useRef, useEffect } from 'react';
import '@material/web/textfield/outlined-text-field.js';

const TextInput = ({ label, value, onChange, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('input', (e) => {
        onChange(e.target.value);
      });
    }
  }, [onChange]);

  return (
    <md-outlined-text-field
      ref={ref}
      label={label}
      value={value}
      {...props}
    >
    </md-outlined-text-field>
  );
};

export default TextInput;
