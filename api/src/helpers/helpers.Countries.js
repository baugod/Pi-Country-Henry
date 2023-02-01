import countries from "../models/Country.js";
import Activities from "../models/Activities.js";
import { Op } from "sequelize";

export async function getAllCountries() {
    const getCountries = await countries.findAll({
        include: [Activities]
    });
    return getCountries;
}

export async function getCountriesById(id){
    const countryById = await countries.findOne({
        where: {id},
        include: [Activities]
    });
    return countryById;
}

export async function getCountryByName(name){
    const countryByName = await countries.findAll({
        where: {
            name: {
                [Op.iLike]:`%${name}%`},
            },
        include: [Activities]
    });
    return countryByName;
}

export async function getCountriesByRegion(region){
    const countriesByRegion = await countries.findAll({
        where: {
            region: {
                [Op.iLike]: `%${region}%`
            }
        },
        include: [Activities]
    });
    return countriesByRegion;
}

export async function getCountriesByActivity(name){
    const countriesByActivity = await Activities.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
            
        },
        include: [countries]
    });
    return countriesByActivity
}