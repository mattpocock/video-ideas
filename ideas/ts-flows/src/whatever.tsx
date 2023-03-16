interface User {
  name: string;
  password: string;
}

const MyComponent = () => {
  return (
    <Form<User>>
      {/* Somehow restrict name to be keyof User */}
      <Input name="" />
    </Form>
  );
};
