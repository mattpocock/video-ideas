// NOT CORRECT

export type Result<T> = {
  error?: string;
  data?: T;
};

// CORRECT-ISH

export type Result2<T> =
  | {
      error: string;
    }
  | {
      data: T;
    };

const test = (result: Result2<number>) => {
  if ("error" in result) {
    result.error;
    //     ^?
  } else {
    result.data;
    //     ^?
  }
};

// DISCRIMINATED UNION

export type Result3<T> =
  | {
      type: "error";
      error: string;
    }
  | {
      type: "success";
      data: T;
    };

const test2 = (result: Result3<number>) => {
  if (result.type === "error") {
    result.error;
    //     ^?
  } else {
    result.data;
    //     ^?
  }
};

// TYPE PREDICATE

const isError = <T>(result: Result2<T>): result is { error: string } => {
  return "error" in result;
};

const test3 = (result: Result2<number>) => {
  if (isError(result)) {
    result.error;
    //     ^?
  } else {
    result.data;
    //     ^?
  }
};
