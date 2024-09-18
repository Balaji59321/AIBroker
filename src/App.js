import React, {useCallback, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardLayoutBasic from './components/NavBar';
import Markets from './components/Markets';
import { blackTheme, lightTheme } from './utils/utils';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = useCallback(() => {
    setDarkTheme((prevTheme) => !prevTheme);
  },[]);

  return (
    <ThemeProvider theme={darkTheme ? blackTheme : lightTheme}>
    <CssBaseline />
    <div className="App">
      {/* Routing based components */}
      <BrowserRouter>
        <DashboardLayoutBasic darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" exact={true} element={<Markets isDarkTheme={darkTheme} />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
