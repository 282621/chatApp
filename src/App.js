import React from 'react';
import './App.css';

import Dashboard from './components/dashboard';
import Store from './components/store';


function App() {
  return (
    <div className="App">
      <Store>
      <Dashboard />>
      </Store>
    </div>
  );
}

export default App;
