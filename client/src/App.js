import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {apiAllCountry} from "./redux/apiPetitions.js"
import Home from "./views/home/home";
import { LandingPage } from './views/landingPage/landingPage.jsx';
import DetailCountry from './views/detail/detail.jsx';
import Navbar from './components/navBar/navBar.jsx';
import Form from './views/form/form.jsx';
import About from './views/about/about.jsx';

function App(){
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        apiAllCountry(dispatch);
    }, [dispatch]);

    return (
        <>
        {pathname !== "/" && <Navbar />}
           <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/country/id/:countryId" element={<DetailCountry />} />
            <Route exact path="/createActivity" element={<Form />} />
            <Route exact path="/about" element={<About />} />
           </Routes>
        </>
    )
};

export default App;
