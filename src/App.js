import './App.css';
import React from 'react';
import Home from './pages/Home';
import { DarkModeProvider } from './contexts/DarkModeProvider';

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Home />
      </DarkModeProvider>
    </div>
  );
}

export default App;
