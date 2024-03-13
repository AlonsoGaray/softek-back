import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import openapiDoc from "../schemas/openapi.json";

const router = Router();

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(openapiDoc));

export default router;
