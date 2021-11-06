import { Router, Request, Response } from "express";

import { createSpecificationControoler } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationControoler.handle(request, response);
});

specificationsRoutes.get("/", (request: Request, response: Response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
