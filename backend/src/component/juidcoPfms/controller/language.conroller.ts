import { Request, Response } from "express";
import { sendResponse } from "../../../util/sendResponse";
import LanguageDao from "../dao/language.dao";


/**
 * | Author- Sanjiv Kumar
 * | Created On- 22-01-2024
 * | Created for- Vendor Type Controller
 * | Common apiId- 05
 */

class LanguageController {
  private languageDao: LanguageDao;
  constructor() {
    this.languageDao = new LanguageDao();
  }

  // Get all vendor Types
  get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.languageDao.get();

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

export default LanguageController;