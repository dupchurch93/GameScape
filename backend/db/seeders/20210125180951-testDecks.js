"use strict";
const faker = require("faker");

const generateDeckData = () => {
  const deckData = [];
  for (let i = 0; i < 20; i++) {
    deckData.push({
      name: faker.lorem.word(),
      creatorId: Math.random() * (20 - 1) + 1,
    });
  }
  return deckData;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Decks",
      [
        {
          name: ".Hack Trivia",
          creatorId: 1,
        },
        ...generateDeckData(),
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
    return queryInterface.bulkDelete("Decks", {}, {});
  },
};
