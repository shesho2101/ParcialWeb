import dotenv from 'dotenv';
dotenv.config();

import ServerFactory from './express/infrastructure/factory/ServerFactory';
import ProductRouterFactory from './producto/infrastructure/factory/ProductRouterFactory';
import UserRouterFactory from './usuario/infrastructure/factory/UserRouterFactory';
import { connectDB } from './express/infrastructure/database/mysql';
import ExpressProvider from './express/infrastructure/provider/ExpressProvider';
import syncDatabase from './express/infrastructure/database/sync';

// ✅ Verificar que los valores están bien cargados desde ExpressProvider
console.log("🔍 ExpressProvider HOST:", ExpressProvider.getHost());
console.log("🔍 ExpressProvider PORT:", ExpressProvider.getPort());
console.log("🔍 ExpressProvider PROTOCOL:", ExpressProvider.getProtocol());
console.log("🔍 ExpressProvider DB Config:", ExpressProvider.getDBConfig());

const productRouter = ProductRouterFactory.create();
const userRouter = UserRouterFactory.create();
const routers = [productRouter, userRouter];

const server = ServerFactory.create(routers);

connectDB().then(async () => {
  await syncDatabase(); // 📌 Sincronizar la base de datos antes de iniciar el servidor
  server.start();
}).catch((error) => {
  console.error('❌ No se pudo conectar a la base de datos:', error);
});
