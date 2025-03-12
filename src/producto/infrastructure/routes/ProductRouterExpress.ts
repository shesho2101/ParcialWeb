import { Router } from 'express';
import RouterExpressInterface from '../../../express/domain/RouterExpressInterface';
import ProductController from '../controllers/ProductController';

export default class ProductRouterExpress implements RouterExpressInterface {
  public readonly path = '/productos';
  public readonly router = Router();

  constructor(private readonly controller: ProductController) {
    this.routes();  // Aquí llamas claramente al método routes
  }

  // Este método cumple claramente la interfaz del profesor
  public routes(): void {
    this.router.post('/', this.controller.createProduct);
    this.router.get('/', this.controller.listProducts);
  }
}
