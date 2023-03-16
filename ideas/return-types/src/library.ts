import { Event, State, handleNewState } from "./index";

const wrapHandleNewState = (event: Event): State => {
  console.log(event);

  if (event === "WINDOW_BLURRED") {
    return {
      isFocused: true,
      latestUpdate: Date.now(),
    };
  }

  return handleNewState(event);
};
