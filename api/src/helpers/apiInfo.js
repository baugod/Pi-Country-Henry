import axios from "axios";
import countries from "../models/Country.js";

const apiInfo = async()=> {
    const api = await axios.get("https://restcountries.com/v3/all");
    const infoApi = api.data.map(async (e)=>{
        //console.log(infoApi);
        
        if(Array.isArray(e.capital)){
            e.capital = e.capital.join();
        }
        if(Array.isArray(e.continents)){
            e.continents = e.continents.join()
        }
        await countries.create({
            id: e.cca3,
            name: e.name.common,
            flags:e.flags[0],
            capital: e.capital || 'Not have Capital',
            continents: e.continents,
            region: e.region || 'Not have Region',
            subregion: e.subregion || 'Not have Subregion',
            area: e.area,
            population: e.population,
        });
    })
};

export default apiInfo;