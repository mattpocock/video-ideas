// server.ts

import { z } from "zod";
import { makeTypeSafeApiCall } from "./makeTypeSafeApiCall";

export type RouteMap = {
  "/user/create": typeof createUser;
};

export const createUser = makeTypeSafeApiCall(
  z.object({
    email: z.string(),
  }),
  z.object({
    id: z.string(),
    email: z.string(),
  }),
  async ({ email }) => {
    return {
      id: "123",
      email,
    };
  }
);
