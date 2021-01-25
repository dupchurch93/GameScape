'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeckTag = sequelize.define('DeckTag', {
    deckId: {type: DataTypes.INTEGER, allowNull: false},
    tagId: {type: DataTypes.INTEGER, allowNull: false}
  }, {});
  DeckTag.associate = function(models) {
    // associations can be defined here
  };
  return DeckTag;
};
