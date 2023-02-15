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
        },
        sortByPop(state, {payload}) {
            const sortedPop = payload === 'asc' ? 
            state.countriesFilter.sort((a,b) => {
                if(a.population > b.population) {
                    return 1 };
                if(b.population > a.population) {
                    return -1 };
                return 0;
            }) :
            state.countriesFilter.sort((a,b) => {
                if(a.population > b.population){
                    return -1;
                }
                if(b.population > a.population){
                    return 1;
                }
                return 0;
            })
                state.countriesFilter = sortedPop ;
        }
    }
});

export const { getAllCountries, getCountryById, getCountryByName, getCountryByRegion, sortByAsc, sortByPop } = countrySlice.actions;

export default countrySlice.reducer;