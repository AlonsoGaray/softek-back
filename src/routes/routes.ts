import { Router } from "express";
import people from "../api/people";
import films from "../api/films";
import health from "./health";
import apiDocsRouter from "./apidocs";

const router = Router();

router.use("/api/people", people);
router.use("/api/films", films);
router.use("/health", health);
router.use("/api-docs", apiDocsRouter);

export default router;
