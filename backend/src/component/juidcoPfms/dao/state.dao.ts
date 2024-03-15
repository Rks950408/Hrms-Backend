import { Prisma, PrismaClient } from "@prisma/client";
import { generateRes } from "../../../util/generateRes";

const prisma = new PrismaClient();
class StateDao {
  // Get all vendor type
  get = async () => {
    const query: Prisma.indianstatesFindManyArgs = {
      select: {
        id: true,
        name: true,
      },
    };
    const data = prisma.indianstates.findMany(query);
    return generateRes(data);
  };
}

export default StateDao;