import { Op } from "sequelize";
import Product from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/interfaces/IProductRepository";

export default class ProductRepositoryImpl implements IProductRepository {
  async getById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  async getAll(): Promise<Product[]> {
    return await Product.findAll();
  }

  async create(): Promise<Product> {
    return await Product.create(); // El 'id' será generado automáticamente por Sequelize
  }

  async update(id: number, productData: Partial<Product>): Promise<Product | null> {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.update(productData);
    return product;
  }

  async delete(id: number): Promise<void> {
    await Product.destroy({ where: { id } });
  }

  async getByCategory(category: string): Promise<Product[]> {
    return await Product.findAll({ where: { category } });
  }

  async getByPriceRange(min: number, max: number): Promise<Product[]> {
    return await Product.findAll({ where: { price: { [Op.between]: [min, max] } } });
  }

  async getDiscounted(): Promise<Product[]> {
    return await Product.findAll({ where: { discount: { [Op.gt]: 0 } } });
  }

  async searchByName(name: string): Promise<Product[]> {
    return await Product.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
  }

  async getPaginated(page: number, limit: number): Promise<Product[]> {
    return await Product.findAll({ offset: (page - 1) * limit, limit });
  }
}
