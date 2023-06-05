import { Request, Response } from "express";
import readClientsService from "../service/readClient.service";

const readClientsController = async (req: Request, res: Response) => {
  const clientsData = await readClientsService();

  return res.status(200).send(clientsData);
};

export default readClientsController;
