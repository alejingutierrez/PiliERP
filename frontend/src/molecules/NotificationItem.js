import React from 'react';
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
  sx, // Allow additional styling - this will be merged into style
  ...props // Other props for the div root element
}) => {
  const hasAvatar = !!avatarSrc;
  const hasIcon = !!iconName && !hasAvatar; // Prioritize avatar if both are provided

  const rootStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: read ? 'transparent' : 'var(--md-sys-color-surface-container-lowest, rgba(0, 0, 0, 0.04))', // Fallback for safety
    cursor: onClick ? 'pointer' : 'default',
    borderBottom: '1px solid var(--md-sys-color-outline)',
    // Note: '&:last-child' behavior needs to be handled by the parent or by passing a prop.
    // For now, the border is always applied here.
    ...sx, // Spread sx for any overrides or additional styles
  };

  return (
    <div
      onClick={onClick}
      style={rootStyle}
      {...props}
    >
      {hasAvatar && (
        <AvatarAtom src={avatarSrc} alt={avatarAlt} size="medium" style={{ marginRight: '16px' }} />
      )}
      {hasIcon && (
        <IconAtom icon={iconName} color={iconColor} size="medium" style={{ marginRight: '16px' }} />
      )}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'var(--md-sys-typescale-body-large-font-family)',
          fontSize: 'var(--md-sys-typescale-body-large-size)',
          fontWeight: read ? 'var(--md-sys-typescale-body-large-weight)' : 'bold',
          lineHeight: 'var(--md-sys-typescale-body-large-line-height)'
        }}>
          {message}
        </div>
        {timestamp && (
          <div style={{
            fontFamily: 'var(--md-sys-typescale-label-medium-font-family)',
            fontSize: 'var(--md-sys-typescale-label-medium-size)',
            fontWeight: 'var(--md-sys-typescale-label-medium-weight)',
            lineHeight: 'var(--md-sys-typescale-label-medium-line-height)',
            color: 'var(--md-sys-color-on-surface-variant)',
            marginTop: '4px'
          }}>
            {timestamp}
          </div>
        )}
      </div>
      {!read && (
        <BadgeAtom
          variant="dot"
          color="primary"
          style={{ marginLeft: '8px', alignSelf: 'center' }} // Align dot nicely
        />
      )}
    </div>
  );
};

export default NotificationItem;
