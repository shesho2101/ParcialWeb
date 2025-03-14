import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { IAuthService } from "../../domain/interfaces/IAuthService";
import User from "../../domain/entities/User";
import { UserInterface } from "../../domain/interfaces/UserInterface";

export default class AuthenticateUser {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authService: IAuthService
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepository.getByEmail(email);
    if (!user) throw new Error('Usuario no encontrado');

    console.log("🔍 Contraseña ingresada:", password);
    console.log("🔐 Contraseña almacenada (hash):", user.password);

    if (!user.password) {
        throw new Error('⚠ No hay contraseña almacenada para este usuario.');
    }

    const passwordMatch = await this.authService.comparePasswords(password, user.password);
    if (!passwordMatch) throw new Error('Contraseña incorrecta');

    return this.authService.generateToken(user);
  }
}