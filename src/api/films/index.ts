import { Router } from "express";
import {
  crearPeliculaSoftekHandler,
  getAllFilmsHandler,
  getFilmByIdHandler,
  obtenerPeliculasSoftekHandler,
} from "./films.controller";

const router = Router();

/**
 * @openapi
 * /api/films/:
 *   get:
 *     description: Obtener todas las peliculas de SWAPI
 *     operationId: getAllFilms
 *     tags:
 *       - swapi
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TodasPersonasSWAPI'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get("/", getAllFilmsHandler);

/**
 * @openapi
 * /api/films/id/{id}:
 *   get:
 *     description: Obtener una pelicula de SWAPI de acuerdo a su id
 *     operationId: getFilmById
 *     tags:
 *       - swapi
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id de la pelicula
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PersonaSWAPI'
 *       '404':
 *         description: Persona no encontrada
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get("/id/:id", getFilmByIdHandler);

/**
 * @openapi
 * /api/films/softek/v1/:
 *   get:
 *     description: Obtener todas las peliculas en Softek
 *     operationId: obtenerPeliculasSoftek
 *     tags:
 *       - softek
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TodasPersonasSoftek'
 *       '404':
 *         description: Persona no encontrada
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get("/softek/v1/", obtenerPeliculasSoftekHandler);

/**
 * @openapi
 * /api/films/softek/v1/:
 *   post:
 *     description: Crear una pelicula para la bd de Softek
 *     operationId: crearPeliculaSoftek
 *     tags:
 *       - softek
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               fecha_lanzamiento:
 *                 type: string
 *               director:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CrearPersonaSoftekResponse'
 *       '404':
 *         description: Persona no encontrada
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post("/softek/v1/", crearPeliculaSoftekHandler);

export default router;
