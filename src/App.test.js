import { render, screen } from '@testing-library/react';
jest.mock('./logo.svg', () => 'logo.svg');
jest.mock('./App.css', () => '');
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
