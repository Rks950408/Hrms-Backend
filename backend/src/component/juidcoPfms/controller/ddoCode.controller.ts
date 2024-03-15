import { Request, Response } from "express";
import { sendResponse } from "../../../util/sendResponse";
import DdoDao from "../dao/ddoCode.dao";


/**
 * | Author- Rahul Kumar
 * | Created On- 12-03-2024
 * | Created for- DDo Type Controller
 * | Common apiId- 05
 */

class DdoController {
  private ddoDao: DdoDao;
  constructor() {
    this.ddoDao = new DdoDao();
  }

  // Get all vendor Types
  get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.ddoDao.get();

      if (!data)
        return sendResponse(
          true,
          "done",
          data,
          200,
          "GET",
          "0501",
          "1.0",
          res
        );

      return sendResponse(
        true,
        "done",
        data,
        200,
        "GET",
        "0501",
        "1.0",
        res
      );
    } catch (error: any) {
      return sendResponse(
        false,
        error,
        "",
        500,
        "GET",
        "0501",
        "1.0",
        res
      );
    }
  };
}

export default DdoController;