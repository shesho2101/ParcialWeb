import { ProductInterface } from "../interfaces/ProductInterface";

export abstract class AbstractProduct {
  protected id: string;
  protected name: string;
  protected description: string;
  protected price: number;
  protected category: string;
  protected stock: number;
  protected discount: number;

  constructor(product: ProductInterface) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.category = product.category;
    this.stock = product.stock;
    this.discount = product.discount;
  }

  abstract isNull(): boolean;

  // Métodos comunes aquí
  getId(): string {
    return this.id;
  }

  getPriceWithDiscount(): number {
    return this.discount ? this.price * (1 - this.discount / 100) : this.price;
  }
}
