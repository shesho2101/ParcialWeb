import Product from "../entities/Product";

export interface IProductRepository {
  getById(id: number): Promise<Product | null>;
  getAll(): Promise<Product[]>;  // Método que falta
  create(product: Product): Promise<Product>;
  update(id: number, productData: Partial<Product>): Promise<Product | null>;
  delete(id: number): Promise<void>;
  getByCategory(category: string): Promise<Product[]>;
  getByPriceRange(min: number, max: number): Promise<Product[]>;
  getDiscounted(): Promise<Product[]>;
  searchByName(name: string): Promise<Product[]>;
  getPaginated(page: number, limit: number): Promise<Product[]>;
}
