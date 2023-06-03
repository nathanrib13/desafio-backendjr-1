import createClienteRepository from "../repositories/clientes/createCliente.repository";
import createCharacteristicsRepository from "../repositories/characteristics/createCharacteristics.repository";
import createAddressRepository from "../repositories/address/createAddress.repository";
import createContactRepository from "../repositories/contacts/createContact.repository";
import csvToJson from "../helper/csvToJson";
import { createClientSchema } from "../validator/clients.schemas";
import validatorSchema from "../validator/validatorSchema";
import prisma from "../database/client";

const clientService = async (req) => {
  const dataArray: any = await csvToJson(req);
  const responseInsert = [];

  console.log("tamanho do obj");
  console.log(dataArray.length);

  await Promise.all(
    dataArray.map(async (data: any, index: number) => {
      try {
        const dataValidated = validatorSchema(createClientSchema, data);
        if (dataValidated?.error) {
          responseInsert.push({
            message: `foram encontrados na linha ${index + 1} os erros: ${
              dataValidated.message
            }`,
          });
          return;
        }

        const cliente = await createClienteRepository(dataValidated);
        if (!cliente) {
          responseInsert.push({
            message: `nao foi possivel criar o  cliente com cpf ${
              data.cpf
            } na linha ${index + 1}`,
          });
          return;
        }

        const [contacts, address, characteristics] = await Promise.all([
          createContactRepository(cliente.id, dataValidated),
          createAddressRepository(cliente.id, dataValidated),
          createCharacteristicsRepository(cliente.id, dataValidated),
        ]);

        const checkErrors = [
          { repository: contacts, message: "contatos" },
          { repository: address, message: "endereço" },
          { repository: characteristics, message: "características" },
        ];

        for (const { repository, message } of checkErrors) {
          if (!repository) {
            responseInsert.push({
              message: `Não foi possível criar ${message} do cliente ${
                data.cpf
              } na linha ${index + 1}`,
            });
            return;
          }
        }

        responseInsert.push({
          message: `cliente com cpf: ${data.cpf} cadastrado com sucesso`,
        });
      } catch {
        responseInsert.push({
          message: `nao foi possivel criar cliente ${data.cpf} na linha ${
            index + 1
          }`,
        });
        return;
      }
    })
  );
  return { status: 200, data: responseInsert };
};

export { clientService };
