import { render, screen, getByText} from '@testing-library/react';
import Navigation from './Navigation';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme';

describe('Navigation', () => {
  it("Renders <Navigation /> Without Crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    );

    const heading = screen.getAllByTestId('sub-menu');
    expect(heading[0]).toHaveTextContent('about');
  });
});
