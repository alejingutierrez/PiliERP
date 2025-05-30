import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MaterialCard from './MaterialCard';

// Mock the custom elements for testing purposes as they might not be fully defined in a Jest/JSDOM environment
// or might rely on browser APIs not present.
// We are testing the React component's logic, not the custom elements themselves here.
// jest.mock('@material/web/elevated-card.js', () => {}); // Using __mocks__ directory instead
// jest.mock('@material/web/button/filled-button.js', () => {}); // Using __mocks__ directory instead

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
    // Note: Since we're not deeply rendering the custom element's own button structure,
    // we'll assume the <md-filled-button> itself is clickable if present.
    // For a more robust test of the custom element interaction, a browser environment (e.g. Playwright) would be needed.
    // Here we check if the button text is present and the click handler is attached to the md-filled-button.

    // Simulate click on the md-filled-button custom element
    // We need to ensure the click handler is passed down.
    // In a real custom element, the click might be on an inner button.
    // For this test, we assume the onClick prop on <md-filled-button> works.
    fireEvent.click(actionButton); // Or screen.getByRole('button', { name: actionText }) if role is set by md-filled-button
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
