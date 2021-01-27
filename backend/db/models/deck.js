"use strict";

module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define(
    "Deck",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      creatorId: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {}
  );
  Deck.associate = function (models) {
    // associations can be defined here
    const columnMapping1 = {
      through: 'SavedDeck',
      foreignKey: 'deckId',
      otherKey: 'userId',
    };
    Deck.belongsToMany(models.User, columnMapping1);

    const columnMapping2 = {
      through: 'DeckTag',
      foreignKey: 'deckId',
      otherKey: 'tagId',
    };
    Deck.belongsToMany(models.Tag, columnMapping2);
  };
  return Deck;
};
