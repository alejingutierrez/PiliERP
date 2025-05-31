import React from 'react';
import MaterialCard from '../molecules/MaterialCard';

const MaterialCardTestPage = () => {
  const handleAction1 = () => {
    alert('Action 1 clicked!');
  };

  const handleAction2 = () => {
    alert('Action 2 clicked!');
  };

  const pageStyle = {
    padding: '24px',
  };

  const h1Style = {
    fontSize: 'var(--md-sys-typescale-headline-small-font-size, 24px)',
    fontWeight: 'var(--md-sys-typescale-headline-small-font-weight, 600)',
    marginBottom: '16px', // Corresponds to gutterBottom
    // component="h1" is implicit by using <h1>
  };

  const h2Style = {
    fontSize: 'var(--md-sys-typescale-title-large-font-size, 20px)', // Adjusted fallback based on typical h6
    fontWeight: 'var(--md-sys-typescale-title-large-font-weight, 500)', // Adjusted fallback
    marginBottom: '16px', // Corresponds to gutterBottom
    // sx={{ mt: X }} is handled by specific marginTop values below
  };

  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>
        Material Card Test Page
      </h1>

      <h2 style={{ ...h2Style, marginTop: '24px' }}> {/* mt: 3 -> 3*8px = 24px */}
        Card with Action
      </h2>
      <MaterialCard
        title="Card with Action Button"
        content="This card includes an action button. Clicking it should trigger an alert."
        actionText="Click Me"
        onActionClick={handleAction1}
      />

      <h2 style={{ ...h2Style, marginTop: '40px' }}> {/* mt: 5 -> 5*8px = 40px */}
        Card without Action
      </h2>
      <MaterialCard
        title="Card without Action Button"
        content="This card does not have an action button and should not display one."
      />

      <h2 style={{ ...h2Style, marginTop: '40px' }}> {/* mt: 5 -> 5*8px = 40px */}
        Another Card with Action
      </h2>
      <MaterialCard
        title="Yet Another Card"
        content="This is another example of a card with an action button."
        actionText="Do Something Else"
        onActionClick={handleAction2}
      />
    </div>
  );
};

export default MaterialCardTestPage;
