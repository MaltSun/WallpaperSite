const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const orders = require("./orders");
const wallpapers = require("./wallpapers");

class orderWallpapers extends Model {}

orderWallpapers.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "orders",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    wallpapersId: {
      type: DataTypes.INTEGER,
      references: {
        model: "wallpapers",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "orderWallpapers",
    tableName: "orderWallpapers",
    timestamps: true,
  }
);

orders.belongsToMany(wallpapers, { through: orderWallpapers, foreignKey: "orderId" });
wallpapers.belongsToMany(orders, { through: orderWallpapers, foreignKey: "wallpapersId" });

module.exports = orderWallpapers;
// migrations/xxxx-create-orders.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    await queryInterface.createTable("providers", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("providers");
  },
};
