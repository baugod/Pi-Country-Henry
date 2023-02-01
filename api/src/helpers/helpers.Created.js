import Activities from "../models/Activities.js";

export async function createActivity(
    name,
    duration,
    difficulty,
    season,
    countryId
  ) {
    const postActivity = await Activities.create({
      name,
      duration,
      difficulty,
      season,
      countryId,
    });
    return postActivity;
  }