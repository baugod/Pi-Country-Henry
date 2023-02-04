import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {apiAllCountry} from "./redux/apiPetitions.js"
import Home from "./views/home/home";
import { LandingPage } from './views/landingPage/landingPage.jsx';
import DetailCountry from './views/detail/detail.jsx';

function App(){
    const dispatch = useDispatch();
    useEffect(() => {
        apiAllCountry(dispatch);
    }, [dispatch]);

    return (
        <>
           <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/country/id/:countryId" element={<DetailCountry />} />
           </Routes>
        </>
    )
};

export default App;
