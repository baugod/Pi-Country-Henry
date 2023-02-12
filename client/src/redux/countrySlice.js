import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries: [],
    countriesFilter: [],
    countryId: [],
    region: [],
    loading: true,
    error: false
};

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        getAllCountries(state, action) {
            state.allCountries = action.payload;
            state.countriesFilter = action.payload;
        },
        getCountryByName(state, action){
            state.countriesFilter = action.payload
        },
        getCountryByRegion(state, action){
            state.countriesFilter = action.payload
        },
        getCountryById(state, action){
            state.countryId = action.payload
        },
        sortByAsc(state, {payload}){
            const sortedName = payload === 'asc' ?
            state.countriesFilter.sort((a,b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1 ;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1;
                }
                return 0 ;
            }) : 
            state.countriesFilter.sort((a,b)=> {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return - 1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1;
                }
                return 0
            })
            state.countriesFilter = sortedName;
        }
    }
});

export const { getAllCountries, getCountryById, getCountryByName, getCountryByRegion, sortByAsc } = countrySlice.actions;

export default countrySlice.reducer;