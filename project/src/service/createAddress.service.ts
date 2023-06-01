import client from "../database/client";
import { IAddress } from "../interfaces";

const createAddressService = async (
  clienteID: number,
  addressData: IAddress
) => {
  const { cep, endereco, numero, bairro, cidade, estado } = addressData;

  try {
    const address = await client.address.create({
      data: {
        client: {
          connect: {
            id: clienteID,
          },
        },
        cep,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
      },
    });

    return address;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create cliente");
  }
};

export default createAddressService;
