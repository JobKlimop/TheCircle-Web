export class User {
  public username: string;
  public slogan: string;
  public email: string;
  public avatar: String;

  // Doesn't need a avatar per sé.
  constructor(username: string, slogan: string, email: string) {
    this.username = username;
    this.slogan = slogan;
    this.email = email;
  }
}