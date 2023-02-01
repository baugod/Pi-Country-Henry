import { Router } from "express";
import {createActivity} from "../helpers/helpers.Created.js"

const post = Router();

post.get("/", createActivity);

export default post;