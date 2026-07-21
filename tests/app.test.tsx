import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
  it('renders the trading journal hero content', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /pipwise trading journal/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/track your trades/i)).toBeInTheDocument();
  });
});
