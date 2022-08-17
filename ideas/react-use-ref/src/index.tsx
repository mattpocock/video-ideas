import { useRef } from "react";

const myHook = () => {
  const overload1 = useRef<number>(1);
  //    ^?

  const overload2 = useRef<number>(null);
  //    ^?

  const overload3 = useRef<number>();
  //    ^?
};

const ReasonForOverload2 = () => {
  const ref = useRef<HTMLDivElement>(null);

  // @ts-expect-error
  ref.current = "123";

  return <div ref={ref}></div>;
};
