"use strict";
module.exports = (sequelize, DataTypes) => {
  const SavedDeck = sequelize.define(
    "SavedDeck",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      deckId: { type: DataTypes.INTEGER, allowNull: false },
      timesStudied: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lastStudied: DataTypes.DATE,
      bestScore: { type: DataTypes.INTEGER },
      averageScore: { type: DataTypes.INTEGER },
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
  SavedDeck.associate = function (models) {
    // associations can be defined here
    SavedDeck.belongsTo(models.User, {foreignKey: 'userId'})
    SavedDeck.belongsTo(models.Deck, {foreignKey: 'deckId'})
  };
  return SavedDeck;
};
