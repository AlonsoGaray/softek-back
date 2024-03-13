import { Router } from "express";
import {
  crearPeronaSoftekHandler,
  getAllPeopleHandler,
  getPersonByIdHandler,
  obtenerPersonasSoftekHandler,
} from "./people.controller";

const router = Router();

/**
 * @openapi
 * /api/people/:
 *   get:
 *     description: Obtener todas las personas de SWAPI
 *     operationId: getAllPeople
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
router.get("/", getAllPeopleHandler);

/**
 * @openapi
 * /api/people/{pageNumber}:
 *   get:
 *     description: Obtener todas las personas de SWAPI de una pagina especifica
 *     operationId: getAllPeople2
 *     tags:
 *       - swapi
 *     parameters:
 *       - name: pageNumber
 *         in: path
 *         description: Numero de la pagina
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TodasPersonasSWAPI'
 *       '404':
 *         description: Persona no encontrada
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get("/:pageNumber", getAllPeopleHandler);

/**
 * @openapi
 * /api/people/id/{id}:
 *   get:
 *     description: Obtener una personas de SWAPI de acuerdo a su id
 *     operationId: getPersonById
 *     tags:
 *       - swapi
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id de la persona
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
router.get("/id/:id", getPersonByIdHandler);

/**
 * @openapi
 * /api/people/softek/v1/:
 *   get:
 *     description: Obtener todas las personas en Softek
 *     operationId: obtenerPersonasSoftek
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
router.get("/softek/v1/", obtenerPersonasSoftekHandler);

/**
 * @openapi
 * /api/people/softek/v1/:
 *   post:
 *     description: Crear una persona para la bd de Softek
 *     operationId: crearPeronaSoftek
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
 *               altura:
 *                 type: string
 *               peso:
 *                 type: string
 *               fecha_nacimiento:
 *                 type: string
 *               genero:
 *                 type: string
 *               especie:
 *                 type: string
 *                 enum:
 *                  - Humano
 *                  - Androide
 *                  - Wookie
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
router.post("/softek/v1/", crearPeronaSoftekHandler);

export default router;
