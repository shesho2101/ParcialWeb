import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import User from "../../domain/entities/User";

export default class UserRepositoryImpl implements IUserRepository {
  async getByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  async create(userData: Partial<User>): Promise<User> {
    return await User.create(userData);
  }

  async exists(email: string): Promise<boolean> {
    const user = await User.findOne({ where: { email } });
    return !!user;
  }
}
