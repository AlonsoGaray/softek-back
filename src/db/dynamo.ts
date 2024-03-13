import AWS from "aws-sdk";
import { ACCESS_KEY_ID, AWS_REGION, SECRET_ACCESS_KEY } from "../utils/constants";

AWS.config.update({
  region: AWS_REGION,
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
});

const db = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

export default db;
