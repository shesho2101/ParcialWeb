import { Request, Response } from "express";
import RegisterUser from "../../application/usecases/RegisterUser";
import AuthenticateUser from "../../application/usecases/AuthenticateUser";

export default class UserController {
  constructor(
    private registerUserUseCase: RegisterUser,
    private authenticateUserUseCase: AuthenticateUser
  ) {}

  async register(req: Request, res: Response) {
    try {
      const user = await this.registerUserUseCase.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      // ⚠️ Hacemos un cast de 'error' a 'Error' antes de acceder a 'message'
      const err = error as Error;
      res.status(400).json({ message: err.message });
    }
  }

  async authenticate(req: Request, res: Response) {
    try {
      const token = await this.authenticateUserUseCase.execute(
        req.body.email,
        req.body.password
      );
      res.json({ token });
    } catch (error) {
      // ⚠️ Hacemos un cast de 'error' a 'Error' antes de acceder a 'message'
      const err = error as Error;
      res.status(401).json({ message: err.message });
    }
  }
}
