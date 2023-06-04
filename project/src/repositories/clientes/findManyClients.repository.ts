import prisma from "../../database/client";

const findClientsRepository = async () => {
  const data = await prisma.clients.findMany({
    include: {
      contact: true,
      address: true,
      characteristics: true,
    },
  });
  const dataWithoutPassword = data.map(({ senha, ...rest }) => rest);
  return dataWithoutPassword;
};

export default findClientsRepository;
