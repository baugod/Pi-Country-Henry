import { Router } from "express";
import { postActivity } from "../controller/controller.Created.js";

const post = Router();

post.post("/", postActivity);

export default post;