import prisma from "../../database/client";
import { ICharacteristics } from "../../interfaces";

const createCharacteristicsRepository = async (
  clienteId: number,
  contactData: ICharacteristics
) => {
  const { altura, peso, tipo_sanguineo, cor, signo } = contactData;

  const pesoNumber = Number(peso);

  try {
    const characteristics = await prisma.characteristics.create({
      data: {
        client: {
          connect: {
            id: clienteId,
          },
        },
        altura: altura,
        peso: pesoNumber,
        tipo_sanguineo,
        cor,
        signo,
      },
    });

    return characteristics;
  } catch (error) {
    console.log("Erro ao inserir characteristics");
    console.log(error);
    return null;
  }
};

export default createCharacteristicsRepository;
