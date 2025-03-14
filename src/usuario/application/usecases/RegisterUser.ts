import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { UserInterface } from "../../domain/interfaces/UserInterface";
import User from "../../domain/entities/User";
import { IAuthService } from "../../domain/interfaces/IAuthService";

export default class RegisterUser {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authService: IAuthService
  ) {}

  async execute(userData: UserInterface): Promise<UserInterface> {
    const userExists = await this.userRepository.exists(userData.email);
    if (userExists) throw new Error('Usuario ya existe');

    // 🔥 Asegurarse de que la contraseña está definida
    if (!userData.password) throw new Error('Contraseña es requerida');

    console.log("🔑 Contraseña ingresada:", userData.password);

    // 🔒 Encriptar contraseña
    const hashedPassword = await this.authService.hashPassword(userData.password);

    console.log("🔒 Contraseña encriptada (hash):", hashedPassword);

    const userToCreate: UserInterface = {
      ...userData,
      password: hashedPassword, // Se almacena en la BD
    };

    return await this.userRepository.create(userToCreate);
  }
}
