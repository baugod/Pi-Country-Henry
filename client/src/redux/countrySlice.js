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
        }
    }
});

export const { getAllCountries, getCountryById, getCountryByName, getCountryByRegion } = countrySlice.actions;

export default countrySlice.reducer;