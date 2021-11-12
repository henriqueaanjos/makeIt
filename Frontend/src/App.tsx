import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthProvider, useAuth } from './Hooks/useAuth';

import GlobalStyles from './Global/styles/globals';
import theme from './Global/styles/theme';
import theme2 from './Global/styles/LightTheme';
import Routes from './Routes/routes';
//import './App.css';

const item = {
  hidden: { 
    opacity: 0.5,
    transition: {
      duration: 2 
    }
  },
  show: { 
    opacity: 0.8,
    transition: {
      duration: 2 
    }
  },
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
        <GlobalStyles/>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
