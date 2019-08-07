import React from 'react';
import Countrylist from './components/Countrylist';
import CountryInfo from './components/CountryInfo';
import { Route } from "react-router-dom";


import './App.css';

function App(){
  return(
    <div >
      <header>
        <h2>This is the header</h2>
      </header>
      <div className="flex-container">
        <Countrylist />
        <Route exact path="/info/:id" component={CountryInfo} />
      </div>
    </div>
  )
}

export default App;
