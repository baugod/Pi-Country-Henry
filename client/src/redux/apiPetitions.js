import axios from "./axios.js";
import { getAllCountries, getCountryById, getCountryByName, getCountryByRegion } from "./countrySlice.js";

export async function apiAllCountry(dispatch){
    try{
        const peticion = await axios.get('/country');
        dispatch(getAllCountries(peticion?.data));
        return;
    } catch (error){
        return error.response;
    }
}

export async function apiCountryByName(dispatch, name){
    try{
        const peticion = await axios.get(`/country/name?name=${name}`);
        dispatch(getCountryByName(peticion?.data));
        return;
    } catch (error){
        return error.response;
    }
}

export async function apiCountryByRegion(dispatch, region){
    try{
        const peticion = await axios.get(`/country/region?region=${region}`);
        dispatch(getCountryByRegion(peticion?.data));
        return;
    } catch (error) {
        return error.response;
    }
}

export async function apiCountryById(dispatch, id){
    try {
        const peticion = await axios.get(`/country/id/${id}`);
        dispatch(getCountryById(peticion?.data));
        return;
    } catch (error) {
        return error.response;
    }
}

export async function apiCountryByActivity(dispatch){
    try {
         peticion = await axios.get("/country");
         const aux = peticion.data;
         const aux1 = aux.filter((e)=> e.activities.length !== 0);
         dispatch (getAllCountries(aux1));
         return;    
    } catch (error) {
        return error.response;
    }
}

export async function apiPostActivities(activities){
    return await axios.post(`/createActivity`, {
        ...activities,
        name: activities.name,
        duration: activities.duration,
        difficulty: Number(activities.difficulty),
        season: activities.season,
        countryId: activities.countryId
    });
}