import { Prisma, PrismaClient } from "@prisma/client";
import { generateRes } from "../../../util/generateRes";

const prisma = new PrismaClient();
class UlbDao {
  // Get all vendor type
  get = async () => {
    const query: Prisma.ulbFindManyArgs = {
      select: {
        id: true,
        name: true,
      },
    };
    const data = prisma.ulb.findMany(query);
    return generateRes(data);
  };
}

export default UlbDao;