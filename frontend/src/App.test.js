import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Bienvenido al Dashboard ERP/i);
  expect(welcomeElement).toBeInTheDocument();
});
