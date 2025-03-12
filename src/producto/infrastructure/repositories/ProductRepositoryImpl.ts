import { IProductRepository } from "../../domain/interfaces/IProductRepository";
import { Product } from "../../domain/entities/Product";
import { NullProduct } from "../../domain/entities/NullProduct";

export class ProductRepositoryImpl implements IProductRepository {
  private products: Product[] = [];

  async getById(id: string): Promise<Product> {
    const product = this.products.find(p => p.getId() === id);
    return product || new NullProduct();
  }

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async update(updatedProduct: Product): Promise<Product> {
    const index = this.products.findIndex(p => p.getId() === updatedProduct.getId());
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    return updatedProduct;
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter(p => p.getId() !== id);
  }
}
