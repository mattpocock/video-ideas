// You can pass types to other types!
type MyGenericType<TData> = {
  data: TData;
};

type Example1 = MyGenericType<{
  // ^?
  firstName: string;
}>;

export {};
