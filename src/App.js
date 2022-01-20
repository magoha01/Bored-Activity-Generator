import React from 'react';
import './App.css';

import RandomActivity from './components/randomActivity';



function App() {
  return (
    <div className="App">
     <h1>Get Entertained</h1> 
     <RandomActivity />
     <button>Generate Activity</button>
    </div>
  );
}

export default App;