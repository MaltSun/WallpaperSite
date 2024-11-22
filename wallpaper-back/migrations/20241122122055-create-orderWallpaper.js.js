// migrations/xxxx-create-orders.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    await queryInterface.createTable("sales", {
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
    });
    await queryInterface.createTable("wallpapers", {
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
    });
    await queryInterface.createTable("orderWalppapers", {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orderWallpapers");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("wallpapers");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
