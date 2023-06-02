import { IAddress } from "../../interfaces";

const createAddressRepository = async (
  clienteID: number,
  addressData: IAddress,
  transaction: any
) => {
  const { cep, endereco, numero, bairro, cidade, estado } = addressData;
  try {
    const address = await transaction.address.create({
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
    console.log("Erro ao inserir address");
    console.log(error);
    return null;
  }
};

export default createAddressRepository;
