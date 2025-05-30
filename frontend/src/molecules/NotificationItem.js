import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AvatarAtom from '../atoms/AvatarAtom';
import IconAtom from '../atoms/IconAtom';
import BadgeAtom from '../atoms/BadgeAtom'; // Using BadgeAtom for unread dot indicator

const NotificationItem = ({
  avatarSrc,
  avatarAlt = "User Avatar", // Default alt for avatar
  iconName,
  iconColor = "inherit", // Default color for IconAtom
  message,
  timestamp,
  read = false,
  onClick,
  sx, // Allow additional styling
  ...props // Other props for the Box root element
}) => {
  const hasAvatar = !!avatarSrc;
  const hasIcon = !!iconName && !hasAvatar; // Prioritize avatar if both are provided

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        bgcolor: read ? 'transparent' : 'action.hover', // Subtle background for unread
        cursor: onClick ? 'pointer' : 'default',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none',
        },
        ...sx,
      }}
      {...props}
    >
      {hasAvatar && (
        <AvatarAtom src={avatarSrc} alt={avatarAlt} size="medium" sx={{ mr: 2 }} />
      )}
      {hasIcon && (
        <IconAtom icon={iconName} color={iconColor} size="medium" sx={{ mr: 2 }} />
      )}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" sx={{ fontWeight: read ? 'normal' : 'bold' }}>
          {message}
        </Typography>
        {timestamp && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
            {timestamp}
          </Typography>
        )}
      </Box>
      {!read && (
        <BadgeAtom
          variant="dot"
          color="primary"
          sx={{ ml: 1, alignSelf: 'center' }} // Align dot nicely
        />
      )}
    </Box>
  );
};

export default NotificationItem;
