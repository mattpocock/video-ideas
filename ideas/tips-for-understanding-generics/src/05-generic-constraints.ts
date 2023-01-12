type GetPromiseReturnType<T> = Awaited<ReturnType<T>>;

type Result = GetPromiseReturnType<
  // ^?
  () => Promise<{
    firstName: string;
    lastName: string;
  }>
>;

// @ts-expect-error
type ErrorLine = GetPromiseReturnType<string>;
