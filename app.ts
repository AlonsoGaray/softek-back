import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import routes from "./src/routes/routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send();
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).send();
});

if (require.main === module) {
  app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:8080`);
  });
}

export const handler = serverless(app);
