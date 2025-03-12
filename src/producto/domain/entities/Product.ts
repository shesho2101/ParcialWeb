// src/producto/domain/entities/Product.ts
import { AbstractProduct } from "./AbstractProduct";
import { ProductInterface } from "../interfaces/ProductInterface";

export class Product extends AbstractProduct {
  constructor(product: ProductInterface) {
    super(product);
  }

  isNull(): boolean {
    return false;
  }

  override toString(): string {
    return `${this.name} - ${this.category}: ${this.price}`;
  }
}
