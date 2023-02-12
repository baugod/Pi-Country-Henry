import createActivity from "../helpers/helpers.Created.js";

export async function postActivity(req, res){
    try{
        const newActivity = await createActivity(req);
        
        return res.status(200).json(newActivity)
    } catch (error) {
        return res.status(400).json({err: error.message})
    };
}
