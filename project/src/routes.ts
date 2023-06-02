import { Request, Response, Router } from "express";
import multer = require("multer");
import { clientController } from "./controllers/createClients.controller";
import readClientsController from "./controllers/readClients.controller";

const multerConfig = multer();
const router = Router();

router.post("/test", (req: Request, res: Response) => {
  res.send("testttt");
});
router.post("/clients", multerConfig.single("file"), clientController);
router.get("/clients", readClientsController);
export { router };
