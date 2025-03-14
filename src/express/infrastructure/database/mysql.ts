import { Sequelize } from 'sequelize';
import ExpressProvider from '../provider/ExpressProvider';

const dbConfig = ExpressProvider.getDBConfig();

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    logging: false, // Cambia a true si quieres ver las consultas SQL en la consola
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a MySQL correctamente.');
  } catch (error) {
    console.error('❌ Error al conectar a MySQL:', error);
    process.exit(1);
  }
};

export default sequelize;
