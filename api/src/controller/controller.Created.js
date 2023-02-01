import {createActivity} from "../helpers/helpers.Created";

export async function postActivity(req, res){
    const{
        name,
        duration,
        difficulty,
        season,
        countryId
    } = req.body;
    try{
        const response = await createActivity(name, duration, difficulty, season, countryId);
        return res.status(200).json(response)
    } catch {
        return res.send(error.message)
    };
}
