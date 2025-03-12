import RouterExpressInterface from '../../../express/domain/RouterExpressInterface';
import { ProductRepositoryImpl } from '../repositories/ProductRepositoryImpl';
import { CreateProduct } from '../../application/usecases/CreateProduct';
import { ListProducts } from '../../application/usecases/ListProducts';
import ProductController from '../controllers/ProductController';
import ProductRouterExpress from '../routes/ProductRouterExpress';

export default class ProductRouterFactory {
  public static create(): RouterExpressInterface {
    const repository = new ProductRepositoryImpl();

    const createProductUseCase = new CreateProduct(repository);
    const listProductsUseCase = new ListProducts(repository);

    const controller = new ProductController(
      createProductUseCase,
      listProductsUseCase
    );

    return new ProductRouterExpress(controller);
  }
}
