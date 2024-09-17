import React, {useState} from 'react';
import DashboardLayoutBasic from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Markets from './components/Markets';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardLayoutBasic darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route path="/" exact={true} element={<Markets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
