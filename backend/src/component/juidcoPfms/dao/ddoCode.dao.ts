import { Prisma, PrismaClient } from "@prisma/client";
import { generateRes } from "../../../util/generateRes";

const prisma = new PrismaClient();
class DdoDao {
  // Get all DDO data
  get = async () => {
    const query: Prisma.ddoFindManyArgs = {
      select: {
        ddoCode: true,
        ddoName: true,
        ddoDesignation: true,
        ddoOffice: true,
      },
    };
    const data = await prisma.ddo.findMany(query);
    return generateRes(data);
  };
}

export default DdoDao;