import { Request, Response } from "express";
import { getAllFilms, getFilmById } from "./films.service";

async function getAllFilmsHandler(req: Request, res: Response) {
  const { pageNumber } = req.params;
  const page = Number(pageNumber) || 1;

  try {
    const people = await getAllFilms(page);
    res.status(200).json(people);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
}

async function getFilmByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const person = await getFilmById(Number(id));
    res.status(200).json(person);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
}

export { getAllFilmsHandler, getFilmByIdHandler };
