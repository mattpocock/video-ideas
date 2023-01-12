interface MyObject {
  foo: string;
  bar: number;
  baz: boolean;
}

// Additional properties here are not allowed!
const obj: MyObject = {
  foo: "bar",
  bar: 42,
  baz: true,
};

const objectKeys1 = Object.keys(obj);
//    ^?

// Similar to passing a function to setState
const makeSetter = (setter: () => MyObject) => {
  return setter();
};

const result = makeSetter(() => {
  return {
    foo: "bar",
    bar: 42,
    baz: true,
    // EH?!
    awdawdawdawdawd: "14123123",
  };
});

const objectKeys = Object.keys(result);
//    ^?
