"use strict";

import express, { Request, Response } from "express";
import { baseUrl } from "../../../../util/common";
import EmployeeOnBoardController from "../../controller/empOnBoard.controller";
import LanguageController from "../../controller/language.conroller";
import StateController from "../../controller/state.controller";
import UlbController from "../../controller/ulb.controller";
import DdoController from "../../controller/ddoCode.controller";

/**
 * | Route - 01
 */

class EmployeeOnBoardRoute {
  private employeeOnBoardController: EmployeeOnBoardController;
  private languageController: LanguageController
  private stateController: StateController
  private ulbController:UlbController
  private ddoController:DdoController

  constructor() {
    this.employeeOnBoardController = new EmployeeOnBoardController();
    this.languageController = new LanguageController();
    this.stateController = new StateController();
    this.ulbController=new UlbController();
    this.ddoController=new DdoController();

  }

  configure(app: express.Application): void {
    app
      .route(`${baseUrl}/employee/create`)
      .post((req: Request, res: Response) =>
        this.employeeOnBoardController.create(req, res, "0101")
      ); //1101
// language api
      app
      .route(`${baseUrl}/language/get`)
      .get((req: Request, res: Response) =>
        this.languageController.get(req, res)
      ); //1101
// ulb api
      app
      .route(`${baseUrl}/ulb/get`)
      .get((req: Request, res: Response) =>
        this.ulbController.get(req, res)
      ); //1101
      // state
      app
      .route(`${baseUrl}/state/get`)
      .get((req: Request, res: Response) =>
        this.stateController.get(req, res)
      ); //1101
      // ddo code api 
      app
      .route(`${baseUrl}/ddo/get`)
      .get((req: Request, res: Response) =>
        this.ddoController.get(req, res)
      ); 

  }

}

export default EmployeeOnBoardRoute;
