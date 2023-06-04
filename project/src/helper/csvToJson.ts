import { Readable } from "stream";
import csv = require("csv-parser");
import { AppError } from "../errors";

const csvToJson = async (fileReq: any) => {
  const { file } = fileReq;
  const { buffer } = file;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const clientsReturn = [];
  const jsonDataPromise = new Promise((resolve, reject) => {
    readableFile
      .pipe(csv())
      .on("data", async (data) => {
        clientsReturn.push(data);
      })
      .on("end", async () => {
        resolve(clientsReturn);
      })
      .on("error", (error) => {
        console.error(error);
        reject(new AppError("csv failed", 400));
      });
  });

  const jsonData = await jsonDataPromise;
  return jsonData;
};

export default csvToJson;
