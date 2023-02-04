import React from "react";
import { Link } from "react-router-dom";
import './navBar.Style.css';
import SearchBar from "../SearchBar/SearchBar"
import { apiCountryByName } from "../../redux/apiPetitions";
import { useDispatch } from "react-redux";


export default function Navbar() {
    const dispatch = useDispatch();

    const getCountryByName = async (countryName) =>{
        apiCountryByName(dispatch, countryName);
    };
    return (
        <div className="navbar">
            <div>
            <Link to="/" />
                </div>
                <div>
                <SearchBar onSearch={getCountryByName}/>
                </div>
                <div className='title'>Countries of the world</div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/home" >All Countries
                        </Link>
                        <Link to="/recipe" >Create new Activity</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}