import React, { useRef, useEffect } from 'react';
import '@material/web/button/filled-button.js'; // Importa el componente web directamente

const PrimaryButton = ({ children, sx = {}, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      // Aplica estilos y otras propiedades al componente web
      Object.entries(props).forEach(([key, value]) => {
        if (key !== 'children' && key !== 'sx') {
          buttonElement.setAttribute(key, value);
        }
      });

      // Aplica los estilos de 'sx' directamente al elemento DOM
      const style = {
        fontWeight: '600',
        textTransform: 'none',
        borderRadius: '10px',
        ...sx,
      };
      Object.entries(style).forEach(([key, value]) => {
        buttonElement.style[key] = value;
      });
    }
  }, [props, sx]);

  return (
    <md-filled-button ref={buttonRef}>
      {children}
    </md-filled-button>
  );
};

export default PrimaryButton;
