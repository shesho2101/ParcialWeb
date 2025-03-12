import { UserInterface } from "./UserInterface";

export interface IAuthService {
  comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean>;
  generateToken(user: UserInterface): string;  // <-- claramente cambiado aquí
  hashPassword(password: string): Promise<string>; // ← Añade claramente esta línea

}
