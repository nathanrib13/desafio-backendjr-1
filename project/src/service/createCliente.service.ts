import client from "../database/client";
import { IClient } from "../interfaces";

const createClienteService = async (clientData: IClient) => {
  const { nome, idade, cpf, rg, data_nasc, mae, pai, senha, sexo } = clientData;

  const idadeNumber = Number(idade);

  try {
    const cliente = await client.clients.create({
      data: {
        nome,
        idade: idadeNumber,
        cpf,
        rg,
        data_nasc,
        mae,
        pai,
        senha,
        sexo,
      },
    });

    return cliente;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create cliente");
  }
};

export default createClienteService;
