import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

describe('Home Page', () => {
  it('renders the portfolio sections and contact call to action', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { name: /experience you can measure/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /the thinking behind the build/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /from first question to lasting system/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /what should we solve together/i,
      })
    ).toBeInTheDocument();
  });
});
