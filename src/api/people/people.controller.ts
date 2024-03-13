import { Request, Response } from "express";
import { getAllPeople, getPersonById } from "./people.service";
import { crearPersonaSoftek, obtenerPersonasSoftek } from "../../db/peopleDb";

async function getAllPeopleHandler(req: Request, res: Response) {
  const { pageNumber } = req.params;
  const page = Number(pageNumber) || 1;

  try {
    const people = await getAllPeople(page);
    res.status(200).json(people);
  } catch (error) {
    console.error("getAllPeople ~ error:", error);
    res.status(500).json(error);
  }
}

async function getPersonByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const person = await getPersonById(Number(id));
    res.status(200).json(person);
  } catch (error) {
    console.error("getPersonByIdHandler ~ error:", error);
    res.status(500).json(error);
  }
}

async function obtenerPersonasSoftekHandler(req: Request, res: Response) {
  try {
    const response = await obtenerPersonasSoftek();
    res.status(200).json(response);
  } catch (error) {
    console.error("obtenerPersonasSoftekHandler ~ error:", error);
    res.status(500).json(error);
  }
}

async function crearPeronaSoftekHandler(req: Request, res: Response) {
  const atributosRequeridos = ["nombre", "altura", "peso", "fecha_nacimiento", "genero", "especie"];

  const body = req.body as CrearPersona;

  const atributosFaltantes = atributosRequeridos.filter((atributo) => !req.body[atributo]);

  if (atributosFaltantes.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${atributosFaltantes.join(", ")}`,
    });
  }

  const Especies = {
    HUMAN: "Humano",
    DROID: "Androide",
    WOOKIE: "Wookie",
  };

  if (!Object.values(Especies).includes(body.especie)) {
    return res.status(400).json({
      error: `Especie ${body.especie} es invalido. Valores permitidos: ${Object.values(
        Especies
      ).join(", ")}`,
    });
  }

  try {
    const response = await crearPersonaSoftek(req.body);
    res.status(201).json({ Metodo: "CREAR PERSONA", Respuesta: "EXITOSO", Item: response });
  } catch (error) {
    console.error("crearPeronaSoftekHandler ~ error:", error);
    res.status(500).json(error);
  }
}

export {
  getAllPeopleHandler,
  getPersonByIdHandler,
  crearPeronaSoftekHandler,
  obtenerPersonasSoftekHandler,
};
