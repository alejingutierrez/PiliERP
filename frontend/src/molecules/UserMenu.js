import React, { useState, useId } from 'react';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
// IconAtom will import @material/web/icon/icon.js
import AvatarAtom from '../atoms/AvatarAtom';
import IconAtom from '../atoms/IconAtom';

const UserMenu = ({
  avatarSrc,
  avatarChildren,
  avatarAlt = "User Menu",
  options = [], // Array of { label: string, onClick: function, icon?: string, disabled?: boolean }
  avatarSize = 'medium',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarId = useId();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <AvatarAtom
        id={avatarId}
        src={avatarSrc}
        alt={avatarAlt}
        size={avatarSize}
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }} // Replaced sx prop
      >
        {avatarChildren}
      </AvatarAtom>
      <md-menu
        id="user-menu"
        anchor={avatarId}
        open={menuOpen}
        onClosed={closeMenu}
        anchor-corner="bottom-end"
        menu-corner="top-end"
      >
        {options.map((option, index) => (
          <md-menu-item
            key={option.label || index}
            headline={option.label}
            disabled={option.disabled || false}
            onClick={() => {
              if (option.onClick) {
                option.onClick();
              }
              closeMenu();
            }}
          >
            {option.icon && (
              <IconAtom icon={option.icon} slot="start" size="small" />
            )}
          </md-menu-item>
        ))}
      </md-menu>
    </div>
  );
};

export default UserMenu;
