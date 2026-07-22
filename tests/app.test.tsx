import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
  it('renders the monochrome trading journal hero content', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /modern trading review, stripped to signal/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/black, white, and precise/i)).toBeInTheDocument();
  });
});
