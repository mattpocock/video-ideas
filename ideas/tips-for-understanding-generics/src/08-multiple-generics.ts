const getValue = (obj: unknown, key: unknown) => {
  return obj[key];
};

const result = getValue(
  {
    a: 1,
    b: "some-string",
  },
  "b"
);

console.log(result);
//          ^?

export {};
