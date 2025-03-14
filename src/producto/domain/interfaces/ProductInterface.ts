export interface ProductInterface {
  id?: number;  // id debe ser opcional y de tipo number
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  discount: number;
}
