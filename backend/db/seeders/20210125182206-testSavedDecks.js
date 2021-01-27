"use strict";

const generateSavedDeckData = () => {
  const savedDeckData = [];
  for (let i = 0; i < 20; i++) {
    savedDeckData.push({
      userId: Math.random() * (20 - 1) + 1,
      deckId: Math.random() * (20 - 1) + 1,
    });
  }
  return savedDeckData;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "SavedDecks",
      [
        {
          userId: 1,
          deckId: 1,
        },
        ...generateSavedDeckData(),
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("SavedDecks", {}, {});
  },
};
