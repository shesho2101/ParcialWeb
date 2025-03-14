import { Router } from "express";
import RouterExpressInterface from "../../../express/domain/RouterExpressInterface";
import ProductController from "../controllers/ProductController";

export default class ProductRouterExpress implements RouterExpressInterface {
  public readonly path: string = "/productos";
  public readonly router: Router;

  constructor(private controller: ProductController) {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post("/create", (req, res) => this.controller.createProduct(req, res));
    this.router.get("/", (req, res) => this.controller.listProducts(req, res));
    this.router.get("/categoria/:category", (req, res) => this.controller.getProductsByCategory(req, res));
    this.router.get("/precio", (req, res) => this.controller.getProductsByPriceRange(req, res));
    this.router.get("/descuentos", (req, res) => this.controller.getDiscountedProducts(req, res));
    this.router.delete("/:id", (req, res) => this.controller.deleteProduct(req, res));
    this.router.get("/buscar", (req, res) => this.controller.searchProducts(req, res));
    this.router.get("/paginacion", (req, res) => this.controller.getPaginatedProducts(req, res));
  }

  public routes(): void {
    // Método vacío para cumplir con la interfaz
  }
}
