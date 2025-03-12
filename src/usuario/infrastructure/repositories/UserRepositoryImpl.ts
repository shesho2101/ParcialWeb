import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { UserInterface } from "../../domain/interfaces/UserInterface";

export default class UserRepositoryImpl implements IUserRepository {
  private users: UserInterface[] = [];

  async getByEmail(email: string): Promise<UserInterface | null> {
    const user = this.users.find(u => u.email === email);
    return user || null;
  }

  async create(user: UserInterface): Promise<UserInterface> {
    this.users.push(user);
    return user;
  }

  async exists(email: string): Promise<boolean> {
    return this.users.some(u => u.email === email);
  }
}
