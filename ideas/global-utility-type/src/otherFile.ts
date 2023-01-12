declare global {
  type Maybe<T> = T | null | undefined;
}

type MaybeNumber = Maybe<number>;

export {};
