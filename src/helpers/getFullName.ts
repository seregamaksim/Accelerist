interface nameTypes {
  firstName?: string | null;
  lastName?: string | null;
}
export const getFullName = (userName: nameTypes) =>
  userName.firstName && userName.lastName
    ? `${userName.firstName} ${userName.lastName}`
    : 'No name';
