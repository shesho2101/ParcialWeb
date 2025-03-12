import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { IAuthService } from "../../domain/interfaces/IAuthService";
import { User } from "../../domain/entities/User";

export default class AuthenticateUser {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authService: IAuthService
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const userData = await this.userRepository.getByEmail(email);
    if (!userData) throw new Error('Usuario no encontrado');

    const user = new User(userData);

    const passwordMatch = await this.authService.comparePasswords(password, user.getPassword());
    if (!passwordMatch) throw new Error('Contraseña incorrecta');

    return this.authService.generateToken(userData); // ← ahora pasas directamente userData
  }
}
