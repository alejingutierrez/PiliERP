import React from 'react';
import '@material/web/icon/icon.js';
// Consider importing text-button if breadcrumb items are expected to be interactive
// import '@material/web/button/text-button.js';

const BreadcrumbAtom = ({
  children,
  separator, // User can provide a custom separator string or ReactNode
  maxItems,  // This will be a simplified implementation for now
  style,
  className,
  ...props
}) => {
  const items = React.Children.toArray(children);
  let displayedItems = items;

  // Simplified maxItems handling: show first and last `maxItems / 2` items with an ellipsis in between.
  // A more robust solution would involve measuring width.
  if (maxItems && items.length > maxItems) {
    if (maxItems <= 1) {
      displayedItems = [items[items.length -1]]; // Show only the last item
    } else if (maxItems === 2) {
        displayedItems = [items[0], items[items.length -1]];
    }
    else {
      const startCount = Math.ceil(maxItems / 2);
      const endCount = Math.floor(maxItems / 2);
      displayedItems = [
        ...items.slice(0, startCount),
        <span key="ellipsis" style={{ padding: '0 4px' }}>...</span>, // Ellipsis separator
        ...items.slice(items.length - endCount),
      ];
    }
  }

  const defaultSeparator = (
    <md-icon style={{ fontSize: '1.25em', verticalAlign: 'middle' }}>chevron_right</md-icon>
  );
  const effectiveSeparator = separator !== undefined ? separator : defaultSeparator;

  const breadcrumbStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontFamily: 'var(--mwc-theme-font-family, Inter, sans-serif)',
    fontSize: '0.875rem', // Similar to MUI default
    color: 'var(--mwc-theme-on-surface-variant, #6D7175)',
    ...style,
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // Style for items that are not the separator, to ensure consistent color if children are just text
  const itemContentStyle = {
     color: 'var(--mwc-theme-on-surface-variant, #6D7175)',
  };

  // Last item should have primary color if it's the current page (common pattern)
  // This logic might be better handled by the consumer by styling the last child.
  // For now, we apply a slightly different color to the last item if it's not an ellipsis.

  return (
    <nav aria-label="breadcrumb" {...props}>
      <ol style={breadcrumbStyle} className={className}>
        {displayedItems.map((item, index) => {
          const isLastItem = index === displayedItems.length - 1;
          const isEllipsis = React.isValidElement(item) && item.key === 'ellipsis';

          let itemStyle = itemContentStyle;
          if (isLastItem && !isEllipsis) {
            itemStyle = {...itemStyle, color: 'var(--mwc-theme-primary, #5C6AC4)'};
          }

          return (
            <li key={index} style={listItemStyle}>
              <span style={itemStyle}>
                {/* If item is a Link or interactive, it should ideally be an md-text-button or styled anchor */}
                {item}
              </span>
              {!isLastItem && !isEllipsis && (
                <span style={{ display: 'flex', alignItems: 'center', margin: '0 4px' }}>
                  {effectiveSeparator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbAtom;
