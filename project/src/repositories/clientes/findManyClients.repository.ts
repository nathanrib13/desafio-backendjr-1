import prisma from "../../database/client";

const findClientsRepository = async () => {
  const data = await prisma.clients.findMany({
    include: {
      contact: true,
      address: true,
      characteristics: true,
    },
  });

  return data;
};

export default findClientsRepository;
