import { Request, Response } from 'express';
import { CreateProduct } from '../../application/usecases/CreateProduct';
import { ListProducts } from '../../application/usecases/ListProducts';

export default class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProduct,
    private readonly listProductsUseCase: ListProducts
  ) {}

  public createProduct = async (req: Request, res: Response): Promise<void> => {
    const product = await this.createProductUseCase.execute(req.body);
    res.status(201).json(product);
  };

  public listProducts = async (_req: Request, res: Response): Promise<void> => {
    const products = await this.listProductsUseCase.execute();
    res.status(200).json(products);
  };
}
