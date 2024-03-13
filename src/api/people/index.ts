import { Router } from "express";
import {
  crearPeronaSoftekHandler,
  getAllPeopleHandler,
  getPersonByIdHandler,
  obtenerPersonasSoftekHandler,
} from "./people.controller";

const router = Router();

router.get("/", getAllPeopleHandler);
router.get("/:pageNumber", getAllPeopleHandler);
router.get("/id/:id", getPersonByIdHandler);

router.get("/softek/v1/", obtenerPersonasSoftekHandler);
router.post("/softek/v1/", crearPeronaSoftekHandler);

export default router;
