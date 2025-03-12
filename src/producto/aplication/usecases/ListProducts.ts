import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/interfaces/IProductRepository";

export class ListProducts {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getAll();
  }
}
