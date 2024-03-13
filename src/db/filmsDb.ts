import db from "./dynamo";
import { v4 as uuidv4 } from "uuid";
import { FILMS_TABLE_NAME } from "../utils/constants";

const obtenerPeliculasSoftek = async () => {
  if (typeof FILMS_TABLE_NAME !== "string") {
    throw new Error("No se ha definido el nombre de la tabla");
  }

  const params = {
    TableName: FILMS_TABLE_NAME,
  };

  return await db.scan(params).promise();
};

const crearPeliculaSoftek = async (itemObject: CrearPelicula) => {
  if (typeof FILMS_TABLE_NAME !== "string") {
    throw new Error("No se ha definido el nombre de la tabla");
  }

  const params = {
    TableName: FILMS_TABLE_NAME,
    Item: { id: uuidv4(), ...itemObject },
  };

  await db.put(params).promise();

  return params.Item;
};

export { obtenerPeliculasSoftek, crearPeliculaSoftek };
