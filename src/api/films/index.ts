import { Router } from "express";
import {
  crearPeliculaSoftekHandler,
  getAllFilmsHandler,
  getFilmByIdHandler,
  obtenerPeliculasSoftekHandler,
} from "./films.controller";

const router = Router();

router.get("/", getAllFilmsHandler);
router.get("/:pageNumber", getAllFilmsHandler);
router.get("/id/:id", getFilmByIdHandler);

router.get("/softek/v1/", obtenerPeliculasSoftekHandler);
router.post("/softek/v1/", crearPeliculaSoftekHandler);

export default router;
