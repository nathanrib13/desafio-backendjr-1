import { Request, Response } from "express";
import prisma from "../database/client";
import findClientsRepository from "../repositories/clientes/findManyClients.repository";

const readClientsController = async (req: Request, res: Response) => {
  const clientsData = await findClientsRepository();
  res.status(200).json(clientsData);
};

export default readClientsController;
