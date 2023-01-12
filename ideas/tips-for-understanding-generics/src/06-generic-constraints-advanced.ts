// Sometimes you need to constrain the generic
// that gets passed in

const getKeyWithHighestValue = <TObj>(
  obj: TObj
): {
  key: keyof TObj;
  value: number;
} => {
  const keys = Object.keys(obj) as Array<keyof TObj>;

  let highestKey: keyof TObj = keys[0];
  let highestValue = obj[highestKey];

  for (const key of keys) {
    if (obj[key] > highestValue) {
      highestKey = key;
      highestValue = obj[key];
    }
  }

  return {
    key: highestKey,
    value: highestValue,
  };
};

const result = getKeyWithHighestValue({
  a: 1,
  b: 2,
  c: 3,
});

const key = result.key;
//    ^?

const value = result.value;
//    ^?

export {};
