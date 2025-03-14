import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../express/infrastructure/database/mysql';

// Atributos del modelo Product
interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  discount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Atributos para la creación del producto (sin 'id')
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  // Aquí no declaras las propiedades, Sequelize lo manejará automáticamente
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public category!: string;
  public stock!: number;
  public discount!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

// Inicializa el modelo Product
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'products', // Asegúrate de que la tabla se llama 'products' en la base de datos
  }
);

export default Product;
