let arrayOfThings = [
  { id: 1, name: "abc", rawId: 1 },
  { id: 2, name: "def", rawId: 2 },
  { id: 3, name: "ghi" },
  { id: 4, name: "hjk" },
];

export let rawIds = arrayOfThings
  .map((member) => member.rawId)
  .filter((rawId) => rawId !== undefined) as number[];
