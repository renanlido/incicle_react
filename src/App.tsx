import { ThemeProvider } from 'styled-components';
import UserProfile from './components/UserProfile';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <UserProfile />
      </div>
    </ThemeProvider>
  );
}

export default App;
