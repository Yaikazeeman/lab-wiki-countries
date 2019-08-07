import React from 'react'
import data from '../countries.json';
import {Link} from "react-router-dom";

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


export default CountryInfo;