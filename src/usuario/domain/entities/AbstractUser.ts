import { UserInterface } from "../interfaces/UserInterface";

export abstract class AbstractUser {
  protected id: string;
  protected name: string;
  protected email: string;
  protected password: string;
  protected role: string;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }

  abstract isNull(): boolean;

    getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
  
}
