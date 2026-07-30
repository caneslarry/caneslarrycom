import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

describe('Home Page', () => {
  it('renders the portfolio sections and contact call to action', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { name: /engineering with business impact/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /broad range. clear focus/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /have a difficult product or engineering problem/i,
      })
    ).toBeInTheDocument();
  });
});
