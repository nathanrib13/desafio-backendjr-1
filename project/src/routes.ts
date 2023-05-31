import { Router } from "express";
import multer = require("multer");
import { clientControllerr } from "./controllers/clients.controllers";

const multerConfig = multer();
const router = Router();

router.post("/clients", multerConfig.single("file"), clientControllerr);
export { router };
