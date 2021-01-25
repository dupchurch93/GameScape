'use strict';
module.exports = (sequelize, DataTypes) => {
  const addUserColumns = sequelize.define('addUserColumns', {
    level: DataTypes.INTEGER,
    currentXp: DataTypes.INTEGER,
    xpTilNextLevel: DataTypes.INTEGER,
    icon: DataTypes.STRING
  }, {});
  addUserColumns.associate = function(models) {
    // associations can be defined here
  };
  return addUserColumns;
};