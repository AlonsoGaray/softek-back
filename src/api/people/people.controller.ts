import { Request, Response } from "express";
import { getAllPeople, getPersonById } from "./people.service";
import { crearPersona } from "../../db/people";

async function getAllPeopleHandler(req: Request, res: Response) {
  const { pageNumber } = req.params;
  const page = Number(pageNumber) || 1;

  try {
    const people = await getAllPeople(page);
    res.status(200).json(people);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
}

async function getPersonByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const person = await getPersonById(Number(id));
    res.status(200).json(person);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
}

async function createPersonHandler(req: Request, res: Response) {
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
    const response = await crearPersona(req.body);
    console.log("🚀 ~ createPersonHandler ~ response:", response);
    res.status(201).json(response);
  } catch (error) {
    console.log("🚀 ~ createPersonHandler ~ error:", error);
    res.status(401).json(error);
  }
}

export { getAllPeopleHandler, getPersonByIdHandler, createPersonHandler };
