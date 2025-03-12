import { AbstractUser } from "./AbstractUser";
import { UserInterface } from "../interfaces/UserInterface";

export class User extends AbstractUser {
  constructor(user: UserInterface) {
    super(user);
  }

  isNull(): boolean {
    return false;
  }

  override toString(): string {
    return `${this.name} (${this.email})`;
  }

  // Nuevo método claramente añadido:
  toObject(): UserInterface {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
    };
  }
}
