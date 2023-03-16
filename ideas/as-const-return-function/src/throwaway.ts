import { useState } from "react";

type ErrorShape = {
  message: string;
  code: number;
};

declare global {
  interface Body {
    json(): Promise<unknown>;
  }

  interface JSON {
    /**
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     * @param reviver A function that transforms the results. This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
     */
    parse(
      text: string,
      reviver?: (this: any, key: string, value: any) => any
    ): unknown;
  }
}

const result = fetch("/api/endpoint").then((res) =>
  res.json()
);

const createSet = <T>(initial: T) => {
  return new Set<T>([initial]);
};

const stringSet = createSet("matt");

const objKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

const [index, setIndex] = useState(0);

export {};
