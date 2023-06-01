import client from "../database/client";

const readClientsService = async () => {
  const data = await client.clients.findMany({
    include: {
      contact: true,
      address: true,
      characteristics: true,
    },
  });
  return data;
};

export default readClientsService;
