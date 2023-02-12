import React from "react";
import { Link } from "react-router-dom";
import './landingPage.Style.css';

export function LandingPage() {
    return (
        <div>
            <h1 className="wlc">WELCOME TO MY WORLD</h1>
            <Link to='/home' className="buttonDiv">
                <button className="buttonLanding">START!</button>
            </Link>
        </div>
    )
}