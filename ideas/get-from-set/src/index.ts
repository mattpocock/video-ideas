const set = new Set();

type SetValue<TSet extends Set<any>> = TSet extends Set<
  infer TValue
>
  ? TValue
  : never;

type Value = SetValue<typeof set>;
