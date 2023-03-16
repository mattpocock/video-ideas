export type Event =
  | "WINDOW_FOCUSED"
  | "WINDOW_BLURRED"
  | "WINDOW_CLOSED";

export type State = {
  latestUpdate: number;
  isFocused: boolean;
};

export const handleNewState = (event: Event): State => {
  switch (event) {
    case "WINDOW_BLURRED":
      return {
        isFocused: false,
        latestUpdate: Date.now(),
      };
    case "WINDOW_FOCUSED":
      return {
        isFocused: true,
        latestUpdate: Date.now(),
      };
    case "WINDOW_CLOSED":
      return {
        isFocused: false,
        latestUpdate: Date.now(),
      };
  }
};

const newState = handleNewState("WINDOW_BLURRED");
