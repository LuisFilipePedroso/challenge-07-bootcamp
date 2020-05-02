import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import usePersistedState from './hooks/usePersistedState';
import { ThemeProvider } from './context/Theme';

import Routes from './routes';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeProvider toggleTheme={toggleTheme}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </StyledThemeProvider>
  );
};

export default App;
