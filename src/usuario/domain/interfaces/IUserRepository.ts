import { UserInterface } from './UserInterface';

export interface IUserRepository {
  getByEmail(email: string): Promise<UserInterface | null>;
  create(user: UserInterface): Promise<UserInterface>;
  exists(email: string): Promise<boolean>;
}
