import { Request, Response } from "express";
import findClientsRepository from "../repositories/clientes/findManyClients.repository";

const readClientsController = async (req: Request, res: Response) => {
  const clientsData = await findClientsRepository();

  return res.status(200).send(clientsData);
};

export default readClientsController;
