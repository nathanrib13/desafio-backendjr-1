import findClientsRepository from "../repositories/clientes/findManyClients.repository";

const readClientsService = async () => {
  const clientsData = await findClientsRepository();

  const dataWithoutPassword = clientsData.map(({ senha, ...rest }) => rest);

  return dataWithoutPassword;
};

export default readClientsService;
