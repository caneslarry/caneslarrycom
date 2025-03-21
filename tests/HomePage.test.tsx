import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

describe('Home Page', () => {
  it('renders the heading', () => {
    render(<HomePage />);
    const heading = screen.queryAllByText(/Senior Software Engineer/);
    expect(heading).toHaveLength(3);
  });
});
