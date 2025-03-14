import { IProductRepository } from "../../domain/interfaces/IProductRepository";
import Product from "../../domain/entities/Product";

export default class ListProducts {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getAll();
  }
}
