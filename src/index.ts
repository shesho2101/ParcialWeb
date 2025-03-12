import ServerFactory from './express/infrastructure/factory/ServerFactory';
import ProductRouterFactory from './producto/infrastructure/factory/ProductRouterFactory';
import UserRouterFactory from './usuario/infrastructure/factory/UserRouterFactory';

const productRouter = ProductRouterFactory.create();
const userRouter = UserRouterFactory.create();

const routers = [productRouter, userRouter];

const server = ServerFactory.create(routers);
server.start();
