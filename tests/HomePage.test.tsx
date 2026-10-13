import { render, screen } from '@testing-library/react';
import HomePage from '../components/HomePage';

describe('Home Page', () => {
  it('leads with small business services and separates career experience', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        name: /small business.*big capability.*one engineer/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /useful ai.*built for your business/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /explore all services/i })
    ).toHaveAttribute('href', '/services');
    expect(
      screen.getByRole('link', { name: /explore my experience/i })
    ).toHaveAttribute('href', '/experience');
    expect(
      screen.getByRole('link', { name: /start a conversation/i })
    ).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:me@caneslarry.com')
    );
  });
});
