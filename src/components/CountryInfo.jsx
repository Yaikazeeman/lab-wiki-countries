import React, { Component } from 'react'
import data from '../countries.json';
import { Link } from "react-router-dom";
import axios from 'axios';


function CountryInfo(props) {

    const getProject = (id) => {
        let found = data.find(country => {
            return country.cca3 === id;
        })
        return found;
    }

    const { params } = props.match;
    const foundCountry = getProject(params.id);

    return (
        <div>
            <h2>{foundCountry.name.common}</h2>
            <h3>capital: {foundCountry.capital}</h3>
            <h3>area: {foundCountry.area}</h3>
            <div>
                <h3>Borders</h3>
                <div>
                    <ul>
                    {foundCountry.borders.map((borderCountry) => {
                        let found = data.find(country => {
                            return country.cca3 === borderCountry;
                        })
                        return(
                                <Link  key={found.cca3} to={`/info/${found.cca3}`}><li>{found.name.common}</li></Link>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}


// class CountryInfo extends Component {

//     constructor() {
//         super()
//         this.state = {
//             countries: []
//         }
//     }

//     componentDidMount() {
//         axios.get("https://countries.tech-savvy.tech/countries")
//             .then(response => {
//                 this.setState({ countries: response.data })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.countries.map((theCountry) => {
//                     let thisCountry = theCountry;
//                     return (
//                         <div>
//                         <h2>{thisCountry.name.common}</h2>
//                         <h3>capital: {thisCountry.capital}</h3>
//                         <h3>area: {thisCountry.area}</h3>
//                         <div>
//                             <h3>Borders</h3>
//                             <div>
//                                 <ul>
//                                     {thisCountry.borders.map((borderCountry) => {
//                                         let found = this.state.countries.find(country => {
//                                             return country.cca3 === borderCountry;
//                                         })
//                                         return (
//                                             <Link key={found.cca3} to={`/info/${found.cca3}`}><li>{found.name.common}</li></Link>
//                                         )
//                                     })}
//                                 </ul>
//                             </div>
//                         </div>
//             </div>
//         )
//     }
// }

export default CountryInfo;