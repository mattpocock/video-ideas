export const createSet = <T>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();

const otherStringSet = createSet();
//    ^?
