import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
// import background from './logo.png';

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
            <MainApp />
          </Router>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
