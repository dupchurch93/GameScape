"use strict";
const faker = require("faker");

const generateTagData = () => {
  const tagData = [];
  for (let i = 0; i < 20; i++) {
    tagData.push({
      name: faker.lorem.word()
    });
  }
  return tagData;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Tags",
      [
        {
          name: "Video Games",
        },
        ...generateTagData(),
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
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
