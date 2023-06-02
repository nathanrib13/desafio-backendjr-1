import prisma from "../../database/client";
import { IContact } from "../../interfaces";

const createContactRepository = async (
  clienteId: number,
  contactData: IContact
) => {
  const { telefone_fixo, email, celular } = contactData;

  try {
    const contact = await prisma.contact.create({
      data: {
        client: {
          connect: {
            id: clienteId,
          },
        },
        telefone_fixo,
        celular,
        email,
      },
    });

    return contact;
  } catch (error) {
    console.log("Erro ao inserir characteristics");
    console.log(error);
    return null;
  }
};

export default createContactRepository;
