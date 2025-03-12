import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { UserInterface } from "../../domain/interfaces/UserInterface";
import { User } from "../../domain/entities/User";
import { IAuthService } from "../../domain/interfaces/IAuthService";

export default class RegisterUser {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authService: IAuthService
  ) {}

  async execute(userData: UserInterface): Promise<UserInterface> {
    const userExists = await this.userRepository.exists(userData.email);
    if (userExists) throw new Error('Usuario ya existe');

    // Encriptar claramente la contraseña antes de guardar
    const hashedPassword = await this.authService.hashPassword(userData.password);
    
    const userToCreate: UserInterface = {
      ...userData,
      password: hashedPassword, // Aquí claramente se encripta
    };

    return await this.userRepository.create(userToCreate);
  }
}
