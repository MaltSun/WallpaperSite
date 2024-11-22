const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("./index");
const orders = require("./orders");

class delivery extends Model {}

delivery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 240],
        msg: "Комментарий не должен превышать 240 символов.",
      },
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "id",
      },
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
    modelName: "delivery",
    tableName: "delivery",
    timestamps: true,
  }
);
orders.belongsTo(orders, { foreignKey: "orderId" });

module.exports = delivery;
