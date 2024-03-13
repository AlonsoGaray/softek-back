import axios from "axios";
import traducirRespuesta from "../../utils/responseTranslator";

async function getAllFilms(pageNumber: number) {
  try {
    const response = await axios.get(
      `https://swapi.py4e.com/api/films/?page=${pageNumber}`
    );
    return traducirRespuesta(response.data, "films", pageNumber);
  } catch (error) {
    console.error("An error ocurred:", error);
    return error;
  }
}

async function getFilmById(id: number) {
  try {
    const response = await axios.get(`https://swapi.py4e.com/api/films/${id}`);
    return traducirRespuesta(response.data, "film");
  } catch (error) {
    console.error("An error ocurred:", error);
    return error;
  }
}

export { getAllFilms, getFilmById };
