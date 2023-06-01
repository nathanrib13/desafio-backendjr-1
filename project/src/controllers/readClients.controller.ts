import { Request, Response } from "express";
import client from "../database/client";
import readClientsService from "../service/readClients.service";

const readClientsController = async (req: Request, res: Response) => {
  const clientsData = await readClientsService();
  res.status(200).json(clientsData);
};

export default readClientsController;
