export {};

let a = [
  { id: 1, name: "abc", rawId: 1 },
  { id: 2, name: "def", rawId: 2 },
  { id: 3, name: "ghi" },
  { id: 4, name: "hjk" },
];

let b = a.map((x) => x.rawId).filter((x) => x !== undefined);
//  ^?
