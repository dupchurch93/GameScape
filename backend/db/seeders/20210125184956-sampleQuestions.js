"use strict";
const faker = require("faker");

const generateQuestionData = () => {
  const questionData = [];
  for (let i = 0; i < 200; i++) {
    questionData.push({
      deckId: Math.random() * (20 - 1) + 1,
      question: faker.lorem.sentence(),
      answer: faker.lorem.word(),
    });
  }
  return questionData;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          deckId: 1,
          question: "Who was the main character of the original games?",
          answer: "Kyte",
        },
        ...generateQuestionData(),
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
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
