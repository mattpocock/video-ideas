const ArgSchema = z.tuple([z.any(), z.any(), z.string()]);

const [, , name] = ArgSchema.parse(process.argv);

console.log(name);

const req = {} as Request;

import { z } from "zod";
import { Request, Response } from "express";

const EnvVarSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
});

type ExampleReturnType = {
  something: {
    excellent: string;
    awesome: number;
  };
};

const example = (): ExampleReturnType => {
  return {
    something: {
      excellent: "str",
      awesome: true,
    },
  };
};

const func = (input: string | number) => {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toExponential());
  }
  console.log(input);
};

const CreateUserSchema = z.object({
  body: z.object({
    // Ensures that the email is present
    email: z.string().email(),
  }),
  headers: z.object({
    // Ensures that the authorization header is present
    authorization: z.string(),
  }),
});

const handleCreateUser = (req: Request, res: Response) => {
  const result = CreateUserSchema.safeParse(req);
  if (!result.success) {
    res.status(400).send(result.error);
    return;
  }

  const { email } = result.data.body;

  // Create the user
};

const maybe = <T>(input: T): T | null | undefined => {
  if (Date.now() > 100) {
    return input;
  }
  return undefined;
};

const result = maybe("hello");
