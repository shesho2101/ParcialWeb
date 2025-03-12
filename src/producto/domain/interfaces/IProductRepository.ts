import { Product } from "../entities/Product";

export interface IProductRepository {
  getById(id: string): Promise<Product>;
  getAll(): Promise<Product[]>;
  create(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}
