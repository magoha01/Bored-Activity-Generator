import React from 'react';
import './App.css';

//import { connect } from 'react-redux';

import RandomActivity from './components/randomActivity';



function App() {

  return (
    <div className="App">
     <h1>Get Entertained!</h1> 
     <RandomActivity />
    </div>
  );
}



export default App;