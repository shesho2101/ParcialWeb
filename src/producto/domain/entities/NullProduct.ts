// src/producto/domain/entities/NullProduct.ts
import { AbstractProduct } from "./AbstractProduct";

export class NullProduct extends AbstractProduct {
  constructor() {
    super({
      id: '',
      name: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
      discount: 0,
    });
  }

  isNull(): boolean {
    return true;
  }

  override toString(): string {
    return 'Producto no disponible';
  }
}
