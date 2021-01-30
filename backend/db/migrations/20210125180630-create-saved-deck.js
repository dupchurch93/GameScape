"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("SavedDecks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      deckId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Decks" },
      },
      timesStudied: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lastStudied: {
        type: Sequelize.DATE,
      },
      bestScore: {
        type: Sequelize.INTEGER,
      },
      averageScore: {
        type: Sequelize.DECIMAL(10,2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("SavedDecks");
  },
};
