interface User {
  id: string;
}

interface UserWithOrganisationId extends User {
  organisationId: string;
}

const mapUsersToNewOrganisationId = (
  organisationId: string | undefined,
  users: User[],
) => {
  if (!organisationId) {
    return [];
  }
  return users.map((user) => {
    return {
      ...user,
      organisationId,
    };
  });
};
