import { Request, Response } from "express";
import {CreateProduct} from "../../application/usecases/CreateProduct";
import ListProducts from "../../application/usecases/ListProducts";
import ProductRepositoryImpl from "../repositories/ProductRepositoryImpl";

export default class ProductController {
  constructor(
    private createProductUseCase: CreateProduct,
    private listProductsUseCase: ListProducts
  ) {}

  async createProduct(req: Request, res: Response) {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async listProducts(req: Request, res: Response) {
    try {
      const products = await this.listProductsUseCase.execute();
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await new ProductRepositoryImpl().getById(Number(id));
      if (!product) return res.status(404).json({ message: "Producto no encontrado" });
      res.json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async getProductsByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const products = await new ProductRepositoryImpl().getByCategory(category);
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async getProductsByPriceRange(req: Request, res: Response) {
    try {
      const { min, max } = req.query;
      const products = await new ProductRepositoryImpl().getByPriceRange(Number(min), Number(max));
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async getDiscountedProducts(req: Request, res: Response) {
    try {
      const products = await new ProductRepositoryImpl().getDiscounted();
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedProduct = await new ProductRepositoryImpl().update(Number(id), req.body);
      if (!updatedProduct) return res.status(404).json({ message: "Producto no encontrado" });
      res.json(updatedProduct);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await new ProductRepositoryImpl().delete(Number(id));
      res.status(204).send();
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async searchProducts(req: Request, res: Response) {
    try {
      const { nombre } = req.query;
      const products = await new ProductRepositoryImpl().searchByName(String(nombre));
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }

  async getPaginatedProducts(req: Request, res: Response) {
    try {
      const { page, limit } = req.query;
      const products = await new ProductRepositoryImpl().getPaginated(Number(page), Number(limit));
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }
}
