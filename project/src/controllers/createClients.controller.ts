import { Request, Response } from "express";
import { clientService } from "../service/createClient.service";

const clientController = async (req: Request, res: Response) => {
  try {
    const responseService = await clientService(req);
    res.status(200).send(responseService);
  } catch (error) {
    res.status(500).json("internal server error ");
  }
};

export { clientController };
