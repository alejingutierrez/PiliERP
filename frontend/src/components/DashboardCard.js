import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '../atoms/AppCard';
import '@material/web/icon/icon.js'; // Import for md-icon

const DashboardCard = ({ title, description, icon, onClick }) => {
  // TODO: Consider adding hover effect (e.g., boxShadow) via CSS class + rule
  const cardStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    height: '180px', // Fixed height
    cursor: onClick ? 'pointer' : 'default', // Only show pointer if onClick is provided
    transition: 'box-shadow 0.2s ease-in-out',
    // Hover effect removed, see TODO above
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  };

  const titleStyle = {
    // Using MWC type scale (or sensible defaults if full MWC theme isn't set up)
    fontSize: 'var(--md-sys-typescale-title-medium-size, 1.25rem)', // Fallback to 1.25rem
    fontWeight: 'var(--md-sys-typescale-title-medium-weight, 500)', // Fallback to 500
    lineHeight: 'var(--md-sys-typescale-title-medium-line-height, 1.75rem)',
    margin: 0,
    // MWC h2 usually doesn't have gutterBottom, control spacing with parent
  };

  const descriptionStyle = {
    fontSize: 'var(--md-sys-typescale-body-medium-size, 0.875rem)', // Fallback to 0.875rem
    color: 'var(--md-sys-color-on-surface-variant, #49454F)', // Fallback color
    lineHeight: 'var(--md-sys-typescale-body-medium-line-height, 1.25rem)',
    margin: 0,
    // Allow text to wrap
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // Simple way to limit lines, though not perfect
    display: '-webkit-box',
    WebkitLineClamp: 3, // Limit to 3 lines
    WebkitBoxOrient: 'vertical',
  };

  const iconStyle = {
    marginRight: '8px',
    color: 'var(--md-sys-color-primary, #6750A4)', // Fallback color
  };

  return (
    <AppCard style={cardStyle} onClick={onClick}>
      <div style={headerStyle}>
        {icon && <md-icon style={iconStyle}>{icon}</md-icon>}
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <p style={descriptionStyle}>{description}</p>
    </AppCard>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  /**
   * Name of the Material Design icon to display (e.g., "storefront").
   */
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default DashboardCard;
