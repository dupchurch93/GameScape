'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    deckId: {type: DataTypes.INTEGER, allowNull: false},
    question: {type: DataTypes.STRING, allowNull: false},
    answer: {type: DataTypes.STRING, allowNull: false},
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.Deck, {foreignKey: 'deckId'})
  };
  return Question;
};
