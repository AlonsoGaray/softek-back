import { Router } from "express";
import { getAllFilmsHandler, getFilmByIdHandler } from "./films.controller";

const router = Router();

router.get("/", getAllFilmsHandler);
router.get("/:pageNumber", getAllFilmsHandler);
router.get("/id/:id", getFilmByIdHandler);

export default router;
