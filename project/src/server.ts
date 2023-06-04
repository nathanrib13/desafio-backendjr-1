import "reflect-metadata";
import cors = require("cors");
import express = require("express");
const session = require("express-session");
const passport = require("passport");
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();
app.use(session({ secret: "rentcarisamazing" }));
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
