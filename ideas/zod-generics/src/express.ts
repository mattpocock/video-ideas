import express, { Request, Response } from "express";
import { z } from "zod";

const app = express();

const makeGetEndpoint =
  <TQuery>(
    schema: z.Schema<TQuery>,
    callback: (
      req: Request<any, any, any, TQuery>,
      res: Response
    ) => void
  ) =>
  (req: Request, res: Response) => {
    const queryParamsResult = schema.safeParse(req.query);

    if (!queryParamsResult.success) {
      return res
        .status(400)
        .send(queryParamsResult.error.message);
    }

    return callback(req as any, res);
  };

const somethingHandler = makeGetEndpoint(
  z.object({ id: z.string(), name: z.string() }),
  (req, res) => {
    const id = req.query.id;
    const name = req.query.name;

    res.status(200).send(`Wow: ${id}`);
  }
);

app.get("/something", somethingHandler);

app.get(
  "/something-else",
  makeGetEndpoint(
    z.object({
      id: z.string(),
      message: z.string().optional(),
    }),
    (req, res) => {
      console.log(req.query.message);
      res.send("Wow");
    }
  )
);

app.listen(3000);
