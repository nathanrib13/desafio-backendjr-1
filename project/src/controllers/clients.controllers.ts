import { Request, Response } from "express";
import { Readable } from "stream";
import csv = require("csv-parser");
import readline = require("readline");
import IClient from "../interfaces/clients.interfaces";
import client from "../database/client";

const clientControllerr = async (req: Request, res: Response) => {
  const { file } = req;
  const { buffer } = file;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const clients: IClient[] = [];
  readableFile
    .pipe(csv())
    .on("data", (data) => {
      clients.push(data);
    })
    .on("end", () => {
      res.status(200).json(clients);
    })
    .on("error", (error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to process CSV file" });
    });
};

export { clientControllerr };
