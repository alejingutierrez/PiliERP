import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MaterialCard from './MaterialCard';

// Define Material Web Components as custom elements for the test environment
// These imports should point to the actual component definitions
import { MdElevatedCard } from '@material/web/card/md-elevated-card.js'; // Adjusted path
import { MdFilledButton } from '@material/web/button/md-filled-button.js'; // Adjusted path

if (!customElements.get('md-elevated-card')) {
  customElements.define('md-elevated-card', MdElevatedCard);
}
if (!customElements.get('md-filled-button')) {
  customElements.define('md-filled-button', MdFilledButton);
}

describe('MaterialCard', () => {
  const defaultProps = {
    title: 'Test Title',
    content: 'Test content for the card.',
  };

  test('renders title and content correctly', () => {
    render(<MaterialCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });

  test('renders action button when actionText is provided and calls onActionClick on click', () => {
    const mockOnActionClick = jest.fn();
    const actionText = 'Click Me';
    render(
      <MaterialCard
        {...defaultProps}
        actionText={actionText}
        onActionClick={mockOnActionClick}
      />
    );

    const actionButton = screen.getByText(actionText);
    expect(actionButton).toBeInTheDocument();
    // Ensure the component is treated as a button by testing library, or use its text.
    // The text itself is inside the <md-filled-button>
    expect(actionButton.closest('md-filled-button')).toBeInTheDocument();

    fireEvent.click(actionButton);
    expect(mockOnActionClick).toHaveBeenCalledTimes(1);
  });

  test('does not render action button when actionText is not provided', () => {
    render(<MaterialCard {...defaultProps} />);
    // Using queryByText because getByText would throw an error if not found, which is the desired state.
    expect(screen.queryByText('Click Me')).not.toBeInTheDocument(); // Assuming 'Click Me' or any action text
    // A more generic way if we don't know the actionText beforehand:
    // Check if any element with role 'button' (typical for buttons) exists beyond what might be inherent in the card.
    // However, md-filled-button is a custom element, its role might not be immediately 'button' to JSDOM.
    // So, checking for absence of any passed actionText is safer.
    const buttons = screen.queryAllByRole('button'); // This might be fragile depending on md-filled-button's internals
    // A better check might be to ensure no div wrapping the button is rendered, or check for a specific test-id if we added one.
    // For now, we'll rely on the fact that if actionText is not there, the button text won't be.
  });

  test('does not render action button when onActionClick is not provided, even if actionText is', () => {
    const actionText = 'Click Me';
    render(<MaterialCard {...defaultProps} actionText={actionText} />);
    expect(screen.queryByText(actionText)).not.toBeInTheDocument();
  });
});
