import { Request, Response } from "express";
import { Readable } from "stream";
import csv = require("csv-parser");
import createClienteService from "../service/createCliente.service";
import createAddressService from "../service/createAddress.service";
import createContactService from "../service/createContact.service";
import createCharacteristicsService from "../service/createCharacteristics.service";

const clientControllerr = async (req: Request, res: Response) => {
  const { file } = req;
  const { buffer } = file;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const clients = [];
  readableFile
    .pipe(csv())
    .on("data", async (data) => {
      const {
        nome,
        idade,
        cpf,
        rg,
        data_nasc,
        mae,
        pai,
        senha,
        sexo,
        cep,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
        altura,
        peso,
        tipo_sanguineo,
        cor,
        signo,
        telefone_fixo,
        celular,
        email,
      } = data;

      try {
        const alturaNumber = parseFloat(altura);

        const cliente = await createClienteService(data);

        const address = await createAddressService(cliente.id, data);

        const contact = await createContactService(cliente.id, data);

        const characteristics = await createCharacteristicsService(
          cliente.id,
          data,
          alturaNumber
        );

        const clientData = {
          cliente,
          address,
          contact,
          characteristics,
        };

        clients.push(clientData);
      } catch (error) {
        console.error(error);
      }
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
