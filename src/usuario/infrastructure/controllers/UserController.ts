import { Request, Response } from "express";
import RegisterUser from "../../application/usecases/RegisterUser";
import AuthenticateUser from "../../application/usecases/AuthenticateUser";

export default class UserController {
  constructor(
    private readonly registerUser: RegisterUser,
    private readonly authenticateUser: AuthenticateUser
  ) {}

  public register = async (req: Request, res: Response) => {
    try {
      const user = await this.registerUser.execute(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public authenticate = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const token = await this.authenticateUser.execute(email, password);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
