export const Component = () => {
  return (
    <form
      onSubmit={(e) => {
        e.currentTarget.email.value;
        //                    ^?

        e.currentTarget.password.value;
        //                       ^?
      }}
    ></form>
  );
};
