// You can create functions with a type helper
// mapped over the top, and pass the type to them
// manually...

const makeFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: string; lastName: string }>(
  "/api/endpoint"
).then((res) => {
  console.log(res);
  //          ^?
});

export {};
