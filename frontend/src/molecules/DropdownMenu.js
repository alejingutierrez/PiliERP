import React, { useState, useId } from 'react';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';

const DropdownMenu = ({ options = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonId = useId();

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <md-icon-button id={buttonId} onClick={handleToggleMenu}>
        <md-icon>more_vert</md-icon>
      </md-icon-button>
      <md-menu anchor={buttonId} open={menuOpen} onClosed={closeMenu}>
        {options.map((option, index) => (
          <md-menu-item
            key={index}
            headline={option.label}
            onClick={() => {
              option.onClick && option.onClick();
              closeMenu();
            }}
          />
        ))}
      </md-menu>
    </>
  );
};

export default DropdownMenu;
