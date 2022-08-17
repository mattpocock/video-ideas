import React from "react";

function assertHasFields<TField extends string>(
  fields: TField[],
  e: React.FormEvent,
): asserts e is React.FormEvent & {
  currentTarget: typeof e.currentTarget & {
    [K in TField]: HTMLInputElement;
  };
} {
  fields.forEach((field) => {
    if (!(field in e.currentTarget)) {
      throw new Error(`Form does not have field ${field}`);
    }
  });
}

const Component = () => {
  return (
    <form
      onSubmit={(e) => {
        assertHasFields(["email", "password"], e);

        e.currentTarget.email.value;
        //                    ^?

        e.currentTarget.password.value;
        //                       ^?
      }}
    ></form>
  );
};
