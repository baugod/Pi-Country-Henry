import axios from 'axios';
import { getAllCountries, getCountryById, getCountryByName, getCountryByRegion } from "./countrySlice.js";

export async function apiAllCountry(dispatch){
    try{
        const peticion = await axios.get('http://localhost:3001/country');
        dispatch(getAllCountries(peticion?.data));
        return;
    } catch (error){
        return error.response;
    }
}

export async function apiCountryByName(dispatch, name){
    try{
        const peticion = await axios.get(`http://localhost:3001/country/name?name=${name}`);
        dispatch(getCountryByName(peticion?.data));
        return;
    } catch (error){
        return error.response;
    }
}

export async function apiCountryByRegion(dispatch, region){
    try{
        const peticion = await axios.get(`http://localhost:3001/country/region?region=${region}`);
        dispatch(getCountryByRegion(peticion?.data));
        return;
    } catch (error) {
        return error.response;
    }
}

export async function apiCountryById(dispatch, id){
    try {
        const peticion = await axios.get(`http://localhost:3001/country/id/${id}`);
        dispatch(getCountryById(peticion?.data));
        return;
    } catch (error) {
        return error.response;
    }
}

export async function apiCountryByActivity(dispatch){
    try {
         const peticion = await axios.get(`http://localhost:3001/country`);
         const aux = peticion.data;
         const aux1 = aux.filter((e)=> e.activities.length !== 0);
         dispatch (getAllCountries(aux1));
         return;    
    } catch (error) {
        return error.response;
    }
}


export async function apiPostActivities(activities){
    return await axios.post(`http://localhost:3001/createActivity`, {
        ...activities,
        name: activities.name,
        duration: activities.duration,
        difficulty: Number(activities.difficulty),
        season: activities.season,
        countryId: activities.countryId
    });
}