export interface IUserData {
  id: string;
  name: string;
  password: string;
  email: string;
  role: "admin" | "user";
}
