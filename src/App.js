import React from 'react';
import { AppContextProvider } from "./context/main";
import './App.css';
import Routes from './routes'

function App() {
  return (
    <AppContextProvider>
      <Routes /> 
    </AppContextProvider>
  );
}

export default App;
