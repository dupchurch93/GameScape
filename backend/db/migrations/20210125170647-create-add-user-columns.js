'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Users', 'level', {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }),
      queryInterface.addColumn('Users', 'currentXp', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }),
      queryInterface.addColumn('Users', 'xpTilNextLevel', {
        type: Sequelize.INTEGER,
        defaultValue: 2,
      }),
      queryInterface.addColumn('Users', 'icon', {
        type: Sequelize.STRING,
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Users', 'level'),
      queryInterface.removeColumn('Users', 'currentXp'),
      queryInterface.removeColumn('Users', 'xpTilNextLevel'),
      queryInterface.removeColumn('Users', 'icon')
    ];
  }
};
