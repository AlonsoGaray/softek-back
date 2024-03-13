import { Router } from "express";
import {
  createPersonHandler,
  getAllPeopleHandler,
  getPersonByIdHandler,
} from "./people.controller";

const router = Router();

router.get("/", getAllPeopleHandler);
router.get("/:pageNumber", getAllPeopleHandler);
router.get("/id/:id", getPersonByIdHandler);
router.post("/", createPersonHandler);

export default router;
