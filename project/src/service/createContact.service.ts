import client from "../database/client";
import { IContact } from "../interfaces";

const createContactService = async (
  clienteId: number,
  contactData: IContact
) => {
  const { telefone_fixo, email, celular } = contactData;

  try {
    const contact = await client.contact.create({
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
    // Trate o erro adequadamente
    console.error(error);
    throw new Error("Failed to create cliente");
  }
};

export default createContactService;
