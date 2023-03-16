import { createZodFetcher } from "zod-fetch";

const fetcher = createZodFetcher();

export type Intersected = {
  a: number;
} & {
  b: number;
} & {
  c: number;
};

export type Result = Prettify<Intersected>;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
