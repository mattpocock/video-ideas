/**
 * Add an overload to array which takes a
 * BooleanConstructor to allow this code to work:
 */

// With the overload
const arr = ["1", undefined];
//    ^?

interface Array<T> {
  filter(predicate: BooleanConstructor): NonNullable<T>[];
}

const filteredArr = arr.filter(Boolean);
//    ^?
