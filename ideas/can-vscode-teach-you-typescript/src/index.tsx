type State = {
  count: number;
};

type Action =
  | {
      type: "increment_by";
      amount: number;
    }
  | {
      type: "decrement_by_one";
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment_by": {
      return { count: state.count + action.amount };
    }
    case "decrement_by_one": {
      // THIS IS ILLEGAAL
      action.amount;
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

const newState = reducer(
  { count: 0 },
  {
    type: "increment_by",
    amount: 1,
  }
);

export const toString = (
  input: number | string | boolean
) => {
  return input.toString();
};

toString(toString(124123123));
