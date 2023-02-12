import Activities from "../models/Activities.js";
import countries from "../models/Country.js";

const createActivity = async (req) => {
  const { name, difficulty, duration, season, countryId} = req.body;

  const newActivity = await Activities.create({
    name,
    difficulty,
    duration,
    season
  });

  console.log(req);

  countryId.map(async (id) => {
    const country = await countries.findAll({
      where: {
        id: id,
      }
    });
    newActivity.addCountry(country);
  })
}

export default createActivity;
  