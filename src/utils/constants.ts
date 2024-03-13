import * as dotenv from "dotenv";
dotenv.config();

export const PEOPLE_TABLE_NAME = process.env.PEOPLE_TABLE_NAME;
export const FILMS_TABLE_NAME = process.env.FILMS_TABLE_NAME;

export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
export const AWS_REGION = "us-east-1";
