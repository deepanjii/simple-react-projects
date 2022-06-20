import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  test('renders without error', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText('Dashboard')).toBeTruthy();
  });
});
