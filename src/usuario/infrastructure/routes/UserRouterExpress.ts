import { Router } from "express";
import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";
import UserController from "../controllers/UserController";

export default class UserRouterExpress implements RouterExpressInterface {
  public readonly path: string = "/usuarios";
  public readonly router: Router;

  constructor(private controller: UserController) {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post("/register", this.controller.register.bind(this.controller));
    this.router.post("/login", this.controller.authenticate.bind(this.controller));
  }

  public routes(): void {
    // Método vacío para cumplir con la interfaz
  }
}
