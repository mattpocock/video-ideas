// makeTypeSafeApiCall.ts

import { z } from "zod";

type MaybePromise<T> = T | Promise<T>;

export const makeTypeSafeApiCall = <TInput, TOutput>(
  inputSchema: z.Schema<TInput>,
  outputSchema: z.Schema<TOutput>,
  handler: (input: TInput) => MaybePromise<TOutput>
): ((input: TInput) => MaybePromise<TOutput>) => {
  return async (input: unknown) => {
    const result = await handler(inputSchema.parse(input));
    return outputSchema.parse(result);
  };
};
