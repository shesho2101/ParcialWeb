import { IAuthService } from "../../domain/interfaces/IAuthService";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserInterface } from "../../domain/interfaces/UserInterface";

export default class AuthServiceImpl implements IAuthService {

  private readonly jwtSecret = "secreto"; // Esto debería ser una variable de entorno
  private readonly saltRounds = 10;

  async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  generateToken(user: UserInterface): string {
    const payload = { email: user.email, role: user.role };
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }
}
