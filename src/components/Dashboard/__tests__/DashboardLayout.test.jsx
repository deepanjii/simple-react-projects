import React from 'react';
import { render } from '@testing-library/react';
import DashboardLayout from '../DashboardLayout';

describe('Dashboard', () => {
  test('renders without error', () => {
    const { getByText } = render(<DashboardLayout />);
    expect(getByText(/projects/i)).toBeTruthy();
  });
});
