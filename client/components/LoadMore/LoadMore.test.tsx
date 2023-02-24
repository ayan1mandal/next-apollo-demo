import { render, screen, getByText } from '@testing-library/react';
import LoadMore from './LoadMore';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../lib/theme';

describe('LoadMore', () => {
  it("Renders <LoadMore /> Without Crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <LoadMore
          performFetchMore={jest.fn()} />
      </ThemeProvider>
    );

    const component = screen.getByTestId('load-more');
    expect(component).toHaveTextContent('LOAD MORE');
  });
});
