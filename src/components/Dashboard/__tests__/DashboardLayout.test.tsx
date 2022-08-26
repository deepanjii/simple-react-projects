import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DashboardLayout from '../DashboardLayout';

describe('Dashboard', () => {
  test('renders without error', () => {
    const { getByText } = render(
      <DashboardLayout>
        <span>Text</span>
      </DashboardLayout>,
      { wrapper: MemoryRouter }
    );
    expect(getByText(/projects/i)).toBeTruthy();
  });
});
