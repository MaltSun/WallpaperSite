const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const providers = require("./providers");
const sales = require("./sales");

class wallpapers extends Model {}

wallpapers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    width: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    length: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "sales",
        key: "id",
      },
    },
    providersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "providers",
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
    modelName: "wallpapers",
    tableName: "wallpapers",
    timestamps: true,
  }
);
providers.hasMany(wallpapers, { foreignKey: "providersId" });
sales.hasMany(wallpapers, { foreignKey: "salesId" });
module.exports = wallpapers;
