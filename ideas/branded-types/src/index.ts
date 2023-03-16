const api = {} as any;

declare const brand: unique symbol;

type Brand<T, TBrand extends string> = T & {
  [brand]: TBrand;
};

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;

const takesInPassword = (password: Password) => {};

const isValidPassword = (
  password: string
): password is Password => {
  return password.length > 8;
};

const password = "awdkj1243hbawd";

if (isValidPassword(password)) {
  takesInPassword(password);
}

type User = {
  id: string;
};

const makePayment = async (user: User) => {
  // Oh no, no validation!

  await api.makePayment(user, "5 billion smackers");
};

type AuthorizedUser = Brand<User, "AuthorizedUser">;

// Argument of type '{ id: string; }' is not
// assignable to parameter of type 'AuthorizedUser'.
makePayment({
  id: "123",
});
