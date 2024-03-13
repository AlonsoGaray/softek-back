import db from "./dynamo";
import { v4 as uuidv4 } from "uuid";
import { PEOPLE_TABLE_NAME } from "../utils/constants";

const getPeople = async () => {
  if (typeof PEOPLE_TABLE_NAME !== "string") {
    throw new Error("No se ha definido el nombre de la tabla");
  }

  const params = {
    TableName: PEOPLE_TABLE_NAME,
  };

  return await db.scan(params).promise();
};

const crearPersona = async (itemObject: CrearPersona) => {
  if (typeof PEOPLE_TABLE_NAME !== "string") {
    throw new Error("No se ha definido el nombre de la tabla");
  }

  const params = {
    TableName: PEOPLE_TABLE_NAME,
    Item: { id: uuidv4(), ...itemObject },
  };

  return await db.put(params).promise();
};

export { getPeople, crearPersona };
