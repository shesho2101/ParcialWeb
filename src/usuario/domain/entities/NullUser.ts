import { AbstractUser } from "./AbstractUser";

export class NullUser extends AbstractUser {
  constructor() {
    super({
      id: '',
      name: '',
      email: '',
      password: '',
      role: '',
    });
  }

  isNull(): boolean {
    return true;
  }

  override toString(): string {
    return 'Usuario no encontrado';
  }
}
