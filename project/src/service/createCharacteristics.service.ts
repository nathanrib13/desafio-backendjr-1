import client from "../database/client";
import { ICharacteristics } from "../interfaces";

const createCharacteristicsService = async (
  clienteId: number,
  contactData: ICharacteristics,
  alturaNumber: number
) => {
  const { peso, tipo_sanguineo, cor, signo } = contactData;

  const pesoNumber = Number(peso);

  try {
    const contact = await client.characteristics.create({
      data: {
        client: {
          connect: {
            id: clienteId,
          },
        },
        altura: alturaNumber,
        peso: pesoNumber,
        tipo_sanguineo,
        cor,
        signo,
      },
    });

    return contact;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create cliente");
  }
};

export default createCharacteristicsService;
