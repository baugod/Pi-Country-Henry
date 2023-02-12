import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.Style.css"
import Paginate from "../Paginate/Paginate";
import Loader from "../loader/loader.jsx";

export default function Cards() {
 
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const allCountries = useSelector((state) => state.country.countriesFilter);

    const max = allCountries.length / perPage;

    if(!allCountries.length) {
        return <Loader />
    } else {
    return(
        <>
        <div>
          <div className="countryContainer">
            {allCountries?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((country) => (
                <Link to={`/country/id/${country.id}`} key={country.id}>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={country.flags} alt="country-image"
                            className="imgContainer"/>
                        </div>
                        <div className="titleCard">
                            <h6>{country.name}</h6>    
                        </div>
                        <div className="info">
                            <h6>Capital: {country.capital}</h6>
                        </div>
                        <div className="infoReg">
                            <h6>Region: {country.region}</h6>
                        </div>
                    </div>
                </Link>
            ))}
          </div>
          <br />
          <div className="paginateContainer">
            <Paginate page={page} setPage={setPage} max={max} />
          </div>
        </div>
        </>
    );
};
}
