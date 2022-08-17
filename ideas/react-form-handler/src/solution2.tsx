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

const makeTypeSafeForm = <TField extends string>(fields: TField[]) => {
  const onSubmit =
    <TEvent extends React.FormEvent>(
      handler: (
        e: TEvent & {
          currentTarget: TEvent["currentTarget"] & {
            [K in TField]: HTMLInputElement;
          };
        },
      ) => void,
    ) =>
    (e: TEvent) => {
      assertHasFields(fields, e);

      handler(e);
    };

  const Input = (
    props: Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> & {
      name: TField;
    },
  ) => {
    return <input {...props} />;
  };

  return { onSubmit, Input };
};

const { Input, onSubmit } = makeTypeSafeForm(["email", "password"]);

const Component = () => {
  return (
    <form
      onSubmit={onSubmit((e) => {
        e.currentTarget.email.value;
        e.currentTarget.password.value;
      })}
    >
      <Input name="email"></Input>
      <Input name="password"></Input>
    </form>
  );
};
