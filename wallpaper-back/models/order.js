const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const customers = require("./customers");

class orders extends Model {}

orders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "customers",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("placed", "pending", "completed", "canceled"),
      allowNull: false,
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
      onUpdate: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "orders",
    tableName: "orders",
    timestamps: true,
  }
);
orders.belongsTo(customers, { foreignKey: "customerId" });
customers.hasMany(orders, { foreignKey: "customerId" });
module.exports = orders;
