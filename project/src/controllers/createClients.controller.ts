import { Request, Response } from "express";
import csvToJson from "../helper/csvToJson";
import createClienteRepository from "../repositories/clientes/createCliente.repository";
import createCharacteristicsRepository from "../repositories/characteristics/createCharacteristics.repository";
import createAddressRepository from "../repositories/address/createAddress.repository";
import createContactRepository from "../repositories/contacts/createContact.repository";
import { AppError } from "../errors";
import { clientService } from "../service/createClient.service";

const clientController = async (req: Request, res: Response) => {
  try {
    const responseService = await clientService(req);
    res.status(responseService.status).json(responseService.data);
  } catch (error) {
    res.status(500).json("ibnternal server error ");
  }
};

export { clientController };
