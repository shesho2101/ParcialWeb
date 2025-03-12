import { Router } from 'express';
import RouterExpressInterface from '../../../express/domain/RouterExpressInterface';
import UserController from '../controllers/UserController';

export default class UserRouterExpress implements RouterExpressInterface {
  public readonly path = '/usuarios';
  public readonly router = Router();

  constructor(private readonly controller: UserController) {
    this.routes();
  }

  public routes(): void {
    this.router.post('/registro', this.controller.register);
    this.router.post('/login', this.controller.authenticate);
  }
}
