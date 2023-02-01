import { Router } from "express";
import {getCountries, getByName, getById, getByRegion, getByActivity} from "../controller/controller.Countries.js";

const routes = Router();

routes.get("/", getCountries);
routes.get("/id/:id", getById);
routes.get("/activityName/:name", getByActivity)
routes.get("/region", getByRegion);
routes.get("/name?", getByName);


export default routes;