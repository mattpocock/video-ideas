const makeZodSafeFetch = <TData>(url: string) => {
  return fetch(url).then((res) => res.json());
};

const result = makeZodSafeFetch<{
  firstName: string;
  lastName: string;
}>("/api/endpoint").then((res) => {
  console.log(res);
  //          ^?
});
