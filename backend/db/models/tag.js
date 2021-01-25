'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'DeckTag',
      foreignKey: 'tagId',
      otherKey: 'deckId'
    }
    Tag.belongsToMany(models.Deck, columnMapping)
  };
  return Tag;
};
