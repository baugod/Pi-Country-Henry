import {getAllCountries, getCountriesById, getCountryByName, getCountriesByActivity, getCountriesByRegion} from "../helpers/helpers.Countries.js";

export async function getCountries(req, res){
    try{
        const response = await getAllCountries();
        return res.status(200).json(response);
    } catch {
        return re.statys(400).json({err: error.message});
    }
};

export async function getByName(req, res){
    try{
        const {name} = req.query;
         const response = await getCountryByName(name);
         return res.status(200).json(response);
    } catch {
        return res.status(400).json({err: error.message});
    }
};

export async function getById(req, res){
    const {id} = req.params;
    try{
        const response = await getCountriesById(id.toUpperCase());
        if(!response) return res.status(404).send("Not found 404");
        return res.status(200).json(response);
    } catch {
        return res.status(500).json({err: error.message});
    }
};

export async function getByRegion(req, res) {
    console.log("Holaa")
    try{
        const {region} = req.query;
        const response = await getCountriesByRegion(region);
        return res.status(200).json(response);
    } catch {
        res.status(400).json({err: error.message});
    }
};

export async function getByActivity(req, res){
    const {name} = req.params;
    try{
    const response = await getCountriesByActivity(name);
    if(!response) return res.status(400).send("Not found 404");
    return res.status(200).json(response);
    } catch {
        return res.status(500).json({err: error.message});
    }
}