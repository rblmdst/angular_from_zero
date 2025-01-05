export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type LoginData = { email: string; password: string };
export type RegisteredUser = Omit<User, 'password'> & { _id: string };
