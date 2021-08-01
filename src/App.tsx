import { ThemeProvider } from 'styled-components';
import { WritePublication } from './components/WritePublication';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <WritePublication />
      </div>
    </ThemeProvider>
  );
}

export default App;
