import { Prisma, PrismaClient } from '@prisma/client';
import { generateRes } from "../../../util/generateRes";

const prisma = new PrismaClient();
class LanguageDao {
  // Get all vendor type
  get = async () => {
    const query: Prisma.languageFindManyArgs = {
      select: {
        id: true,
        name: true,
      },
    };
    const data = prisma.language.findMany(query);
    return generateRes(data);
  };
}

export default LanguageDao;