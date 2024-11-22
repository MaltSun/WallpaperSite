const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("./index");

class sales extends Model {}

sales.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    percent: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "sales",
    tableName: "sales",
    timestamps: true,
  }
);
module.exports = sales;
