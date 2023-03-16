/**
 * First, create a type helper that represents
 * the Result that we'll get from our safe function
 */
type Result<T> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      error: unknown;
    };

/**
 * Next, make a function that wraps the function
 * you pass it with a try/catch, then executes it
 */
export const makeSafe =
  <TArgs extends any[], TReturn>(
    func: (...args: TArgs) => TReturn
  ) =>
  (...args: TArgs): Result<TReturn> => {
    try {
      return {
        value: func(...args),
        ok: true,
      };
    } catch (e) {
      return {
        error: e,
        ok: false,
      };
    }
  };

/**
 * Wrap any function you want to error check with this
 * makeSafe wrapper
 */
const randomlyFail = makeSafe((input: number) => {
  if (input > 0.5) {
    throw new Error("oops");
  }
  return {
    input,
  };
});

/**
 * Finally, you can call it - and it'll return the error
 * if it fails, or the value if it succeeds
 */
const result = randomlyFail(0.25);

if (result.ok) {
  result.value; // { input: number }
} else {
  result.error; // unknown
}
