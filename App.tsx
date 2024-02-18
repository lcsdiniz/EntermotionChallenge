import theme from './src/theme/theme';
import { ThemeProvider } from '@emotion/react';
import MainStack from './src/navigation/Stack';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStack />
    </ThemeProvider>
  );
}
