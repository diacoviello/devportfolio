import { createRoot, screen } from '@testing-library/react';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

test('renders learn react link', () => {
  root.render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
