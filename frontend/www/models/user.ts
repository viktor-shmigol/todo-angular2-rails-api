export class User {
  id: number;
  email: string;
  token: string;
  password: string;

  constructor(email: string, password: string, token: string, id?: number) {
    this.id = id || null;
    this.email = email;
    this.password = password;
    this.token = token;
  }
}
