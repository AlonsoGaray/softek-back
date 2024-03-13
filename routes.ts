import { Router } from "express";
import people from "./src/api/people";
import films from "./src/api/films";

const router = Router();

router.use("/api/people", people);
router.use("/api/films", films);

export default router;
