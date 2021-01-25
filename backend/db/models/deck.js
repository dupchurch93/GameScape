"use strict";
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define(
    "Deck",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      creatorId: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    },
    {}
  );
  Deck.associate = function (models) {
    // associations can be defined here
    const columnMapping1 = {
      through: "SavedDecks",
      foreignKey: "deckId",
      otherKey: "userId",
    };
    Deck.belongsToMany(models.User, columnMapping1);
  };
  return Deck;
};
