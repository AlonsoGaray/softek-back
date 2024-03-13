import { Request, Response } from "express";
import { getAllFilms, getFilmById } from "./films.service";
import { crearPeliculaSoftek, obtenerPeliculasSoftek } from "../../db/filmsDb";

async function getAllFilmsHandler(req: Request, res: Response) {
  const { pageNumber } = req.params;
  const page = Number(pageNumber) || 1;

  try {
    const people = await getAllFilms(page);
    res.status(200).json(people);
  } catch (error) {
    console.error("getAllFilmsHandler ~ error:", error);
    res.status(500).json(error);
  }
}

async function getFilmByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const person = await getFilmById(Number(id));
    res.status(200).json(person);
  } catch (error) {
    console.error("getFilmByIdHandler ~ error:", error);
    res.status(500).json(error);
  }
}

async function obtenerPeliculasSoftekHandler(req: Request, res: Response) {
  try {
    const response = await obtenerPeliculasSoftek();
    res.status(200).json(response);
  } catch (error) {
    console.error("obtenerPeliculasSoftekHandler ~ error:", error);
    res.status(500).json(error);
  }
}

async function crearPeliculaSoftekHandler(req: Request, res: Response) {
  const atributosRequeridos = ["nombre", "director", "fecha_lanzamiento"];

  const atributosFaltantes = atributosRequeridos.filter((atributo) => !req.body[atributo]);

  if (atributosFaltantes.length > 0) {
    return res.status(400).json({
      error: `Faltan los siguientes atributos: ${atributosFaltantes.join(", ")}`,
    });
  }

  try {
    const response = await crearPeliculaSoftek(req.body);
    res.status(201).json({ Metodo: "CREAR PELICULA", Respuesta: "EXITOSO", Item: response });
  } catch (error) {
    console.error("crearPeliculaSoftekHandler ~ error:", error);
    res.status(500).json(error);
  }
}

export {
  getAllFilmsHandler,
  getFilmByIdHandler,
  obtenerPeliculasSoftekHandler,
  crearPeliculaSoftekHandler,
};
