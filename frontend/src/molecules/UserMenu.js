import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AvatarAtom from '../atoms/AvatarAtom';
import IconAtom from '../atoms/IconAtom';

const UserMenu = ({
  avatarSrc,
  avatarChildren,
  avatarAlt = "User Menu",
  options = [], // Array of { label: string, onClick: function, icon?: string }
  avatarSize = 'medium',
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (onClickCallback) => {
    onClickCallback();
    handleClose();
  };

  return (
    <Box>
      <AvatarAtom
        src={avatarSrc}
        alt={avatarAlt}
        size={avatarSize}
        onClick={handleClick}
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{ cursor: 'pointer' }}
      >
        {avatarChildren}
      </AvatarAtom>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-avatar-button', // Assuming AvatarAtom could have an id
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.label || index}
            onClick={() => handleMenuItemClick(option.onClick)}
            disabled={option.disabled} // Allow disabling menu items
          >
            {option.icon && (
              <ListItemIcon>
                <IconAtom icon={option.icon} size="small" />
              </ListItemIcon>
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
