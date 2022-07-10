import express from "express";
import { getResult } from "../controllers/ikinuki.controller.js";

export const ikinukiRouter = express.Router();

ikinukiRouter.get("/", (req, res) => getResult(req, res));