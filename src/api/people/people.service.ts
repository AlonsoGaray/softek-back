import axios from "axios";
import traducirRespuesta from "../../utils/responseTranslator";

async function getAllPeople(pageNumber: number) {
  try {
    const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${pageNumber}`);
    return traducirRespuesta(response.data, "people", pageNumber);
  } catch (error) {
    console.error("An error ocurred:", error);
    throw error;
  }
}

async function getPersonById(id: number) {
  try {
    const response = await axios.get(`https://swapi.py4e.com/api/people/${id}`);
    return traducirRespuesta(response.data, "person");
  } catch (error) {
    console.error("An error ocurred:", error);
    throw error;
  }
}

export { getAllPeople, getPersonById };
