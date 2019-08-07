import React from 'react';
import data from '../countries.json';
import {Link} from "react-router-dom";

export default() => {
    return(
        <div className="countryList">
            <h2>Countries</h2>
            {data.map((country) => {
                return(
                    <div key={country.cca3} className="flex-container countryDiv">
                        <Link to={`/info/${country.cca3}`}>
                            <div className="flex-container countryLink">
                                <p>{country.flag} {country.name.common}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

    