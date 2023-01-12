// You can pass these type parameters to
// other parts of JS, like Set and Map

const set = new Set();
//    ^?

set.add(1);

// We want this to error!
set.add("abc");

export {};
