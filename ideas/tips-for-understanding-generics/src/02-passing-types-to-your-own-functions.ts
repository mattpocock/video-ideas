// You can create functions with a type helper
// mapped over the top, and pass the type to them
// manually...

const makeFetch = (url: string) => {
  return fetch(url).then((res) => res.json());
};

makeFetch("/api/endpoint").then((res) => {
  console.log(res);
  //          ^?
});

export {};
