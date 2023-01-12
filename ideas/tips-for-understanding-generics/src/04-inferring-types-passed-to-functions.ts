// You don't always have to pass the types to a generic
// function!
const addIdToObject = <T>(obj: T): T & { id: string } => {
  return {
    ...obj,
    id: "123",
  };
};

const result = addIdToObject<{
  firstName: string;
  lastName: string;
}>({
  firstName: "Matt",
  lastName: "Pocock",
});

console.log(result);
//          ^?

export {};
