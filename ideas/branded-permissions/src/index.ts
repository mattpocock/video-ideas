// export const x = {} as any;

export const createPermission = <TInput>() => {
  return new Permission<TInput>();
};

class Permission<TInput, Abilities extends string = never> {
  ability<TName extends string>(name: TName) {
    return new Ability(name);
  }

  abilities<TName extends string>(
    obj: Record<TName, any>
  ): Permission<TInput, Abilities | TName> {
    return this;
  }

  role = (func: (opts: TInput) => Promise<boolean>) => {
    return this;
  };

  can = <TName extends string>(
    ...names: TName[]
  ): Permission<TInput, Abilities | TName> => {
    return this;
  };

  inherit = <TName extends string>(
    permission: Permission<TInput, TName>
  ): Permission<TInput, Abilities | TName> => {
    return this;
  };

  withCheck = <
    TFunc extends (input: TInput, ...args: any[]) => any
  >(
    ability: Ability<Abilities>,
    func: TFunc
  ): TFunc => {
    return func;
  };
}

class Ability<TName extends string> {
  constructor(name: TName) {}
}

const orgUser = createPermission<{
  userId: string;
  organisationId: string;
}>().abilities({
  viewUser: null,
  listUsers: null,
  createUser: null,
  deleteUser: null,
  editUser: null,
});

const memberOfOrganisation = orgUser.role(async (opts) => {
  return true;
});

const adminOfOrganisation = orgUser
  .role(async (opts) => {
    return true;
  })
  .inherit(memberOfOrganisation)
  .can(createUser, deleteUser, editUser);

const createUserFunc = orgUser.withCheck(
  createUser,
  (input) => {}
);

const updateUserFunc = orgUser.withCheck();
