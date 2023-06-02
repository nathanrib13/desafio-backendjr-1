import "reflect-metadata";
import cors = require("cors");
import express = require("express");
import { router } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
