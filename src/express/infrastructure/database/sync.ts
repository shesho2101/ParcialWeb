import sequelize from './mysql';
import User from '../../../usuario/domain/entities/User';
import Product from '../../../producto/domain/entities/Product';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Usa { force: true } si quieres borrar y recrear las tablas
    console.log('✅ Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
  }
};

export default syncDatabase;
