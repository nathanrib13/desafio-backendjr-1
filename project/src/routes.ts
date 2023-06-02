import { Request, Router, Response, NextFunction } from "express";
import multer = require("multer");
import { clientController } from "./controllers/createClients.controller";
import readClientsController from "./controllers/readClients.controller";
import isUserLoggedIn from "./middlewares/isUserLogged.middleware";
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport/passport.setup");

const multerConfig = multer();
const router = Router();

router.post("/clients", multerConfig.single("file"), clientController);

router.get("/read/clients", isUserLoggedIn, readClientsController);
router.get("/");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/read/clients",
    failureRedirect: "/",
  })
);

export { router };
