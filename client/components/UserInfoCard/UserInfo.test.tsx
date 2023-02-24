import { render, screen } from '@testing-library/react';
import UserInfoCard from './UserInfoCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme';

const mockData = {
  name: 'Test Name',
  email: 'test@email.com',
  address: 'Test Address',
  phone: '1234567890',
}

describe('UserInfoCard', () => {
  it("Renders <UserInfoCard /> Without Crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <UserInfoCard user={mockData} />
      </ThemeProvider>
    );

    const component = screen.getByTestId('sub-heading');
    expect(component).toHaveTextContent('Test Name');
  });
});
