import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { IndexProvider } from './utils/DataContext/DataContext';
import Home from './pages/Home/Home';
import PreGame from './pages/PreGame/PreGame';
import Tutorial from './pages/Tutorial/Tutorial';
import Gameplay from './pages/Gameplay/Gameplay';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <IndexProvider>
              <Home />
            </IndexProvider>
          </>
        }
      />
      <Route
        path="/pre"
        element={
          <IndexProvider>
            <PreGame />
          </IndexProvider>
        }
      />
      <Route
        path="/tutorial"
        element={
          <IndexProvider>
            <Tutorial />
          </IndexProvider>
        }
      />
      <Route
        path="/game"
        element={
          <IndexProvider>
            <Gameplay />
          </IndexProvider>
        }
      />
    </Routes>
  );
}

export default App;
