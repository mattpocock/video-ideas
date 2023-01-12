// Sometimes, you'll need to override the types inside
// the generic function with an assertion. That's OK!
const typedObjectKeys = <TObj extends {}>(
  obj: TObj
): Array<keyof TObj> => {
  return Object.keys(obj);
};

const result = typedObjectKeys({
  //  ^?
  name: "John",
  age: 30,
});

export {};
