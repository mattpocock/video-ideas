import { useRef } from "react";

const myHook = () => {
  const overload1 = useRef<number>(1);
  //    ^?

  const overload2 = useRef<number>(null);
  //    ^?

  const overload3 = useRef<number>();
  //    ^?
};
