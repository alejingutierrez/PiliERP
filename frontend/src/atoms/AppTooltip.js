import React, { useRef, useEffect } from 'react';
import '@material/web/tooltip/tooltip';

const AppTooltip = ({ children, title, placement = 'bottom', ...props }) => {
  const internalUniqueId = React.useId(); // Moved to the top
  const childRef = useRef(null);
  const tooltipRef = useRef(null);

  // MWC tooltip position mapping
  const mwcPosition = (muiPlacement) => {
    switch (muiPlacement) {
      case 'top-start':
      case 'top':
      case 'top-end':
        return 'top';
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        return 'bottom';
      case 'left-start':
      case 'left':
      case 'left-end':
        return 'left';
      case 'right-start':
      case 'right':
      case 'right-end':
        return 'right';
      default:
        return 'bottom';
    }
  };

  useEffect(() => {
    // Ensure childRef is connected to the actual DOM element
    // This might require the child to forward its ref or be a native HTML element
    if (childRef.current && tooltipRef.current) {
      tooltipRef.current.anchorElement = childRef.current;
    }
  }, [children]);


  // We need to render the child and the tooltip separately,
  // then associate them. Wrapping is harder with custom React components as children.
  // A common pattern is to ensure the child accepts a ref.
  // For simplicity, let's assume the child is a single element that can have an id.
  // Or, we can try to make the child a slot.

  // If children is a single React element, we can clone it to add a ref.
  // However, the MWC tooltip expects to be a sibling or use an ID.
  // The wrapping approach is more idiomatic for web components if the tooltip is placed around the child.
  // Let's try a structure where md-tooltip wraps the child.

  if (!React.isValidElement(children)) {
    // Tooltip can only wrap a single valid React element
    return <>{children}</>;
  }

  // The id for associating tooltip with anchor
  const anchorId = `tooltip-anchor-${internalUniqueId}`;

  return (
    <>
      {React.cloneElement(children, { id: anchorId, ref: childRef })}
      <md-tooltip
        ref={tooltipRef}
        anchor={anchorId}
        position={mwcPosition(placement)}
        {...props}
      >
        {title}
      </md-tooltip>
    </>
  );
};

export default AppTooltip;
