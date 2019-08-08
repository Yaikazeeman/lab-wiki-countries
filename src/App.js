import React,{Component} from 'react';
import Countrylist from './components/Countrylist';
import CountryInfo from './components/CountryInfo';
import { Route } from "react-router-dom";

import './App.css';
import axios from 'axios';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
        countries: []
    }
}

componentDidMount() {
    axios.get("http://localhost:3001/countries")
    .then(response => {
        this.setState({countries: response.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

render(){
  return(
    <div >
      <header>
        <h2>This is the header</h2>
      </header>
      <div className="flex-container">
        <Countrylist countries={this.state.countries}/>
        <Route exact path="/info/:id" render={props =><CountryInfo countries={this.state.countries} {...props}/>} />
      </div>
    </div>
  )
}
 
}

export default App;
