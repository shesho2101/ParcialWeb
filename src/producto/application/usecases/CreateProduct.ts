import { ProductInterface } from "../../domain/interfaces/ProductInterface";
import Product from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/interfaces/IProductRepository";

export class CreateProduct {
  constructor(private productRepository: IProductRepository) {}

  async execute(productData: ProductInterface): Promise<Product> {
    const product = new Product(productData);
    return this.productRepository.create(product);
  }
}
