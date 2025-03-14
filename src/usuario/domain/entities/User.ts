import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../express/infrastructure/database/mysql';

class User extends Model {
  public id!: string; // Documento del usuario
  public nombre!: string;
  public email!: string;
  public password!: string;
  public role!: string;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,  // Ahora será el documento de identidad
      primaryKey: true,        // Lo hacemos clave primaria
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user" // Por defecto será un usuario normal
    }
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false
  }
);

export default User;
