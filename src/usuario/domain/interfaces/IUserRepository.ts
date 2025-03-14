import { User } from "../entities/User";

export interface IUserRepository {
  getByEmail(email: string): Promise<User | null>; 
  create(user: Partial<User>): Promise<User>;
  exists(email: string): Promise<boolean>;
}
