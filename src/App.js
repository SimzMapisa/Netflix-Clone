import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const user = true;

  return (
    <div className="app">
      <Router>

        {!user ? (
          <h1>Login</h1>
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
