import { error } from "console";
import prisma from "../../database/client";
import { AppError } from "../../errors";
import { IClient } from "../../interfaces";

const createClienteRepository = async (clientData: any, transaction: any) => {
  const { nome, idade, cpf, rg, data_nasc, mae, pai, senha, sexo } = clientData;
  try {
    const idadeNumber = Number(idade);
    const cliente = await transaction.clients.create({
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
    console.log("Erro ao inserir cliente");
    console.log(error);
    return null;
  }
};

export default createClienteRepository;
