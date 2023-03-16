import { useState } from "react";

const useFirstName = () => {
  const [firstName, setFirstName] = useState("");

  return [firstName, setFirstName] as const;
};

const [firstName, setFirstName] = useFirstName();

const useEffectPattern = (...args: any[]) => {
  return {} as any;
};

let isSelected = true;

useEffectPattern({
  isSelected,
})
  .match(
    {
      isSelected: true,
    },
    () => {
      // Run an effect if isSelected is true
    }
  )
  .match(
    {
      isSelected: false,
    },
    () => {
      // Run an effect if isSelected is false
    }
  );

export const createUser = () => {
  return {
    name: "Matt",
    role: "admin" as const,
  };
};
