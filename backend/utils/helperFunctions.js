const { Deck, SavedDeck, Question } = require("../db/models");


//to do: set up normalization function that gets a user and their decks. Use eager loading
const getSavedDecks = async (userId) => {
    const savedDecks = await SavedDeck.findAll({
        where: {
            userId
        },
        order: [['updatedAt', 'DESC']],
        include: { model: Deck, include: { model: Question}}
    });
    const decksList = savedDecks.map((deck) => {
      return {
        name: deck.Deck.name,
        id: deck.Deck.id,
        timesStudied: deck.timesStudied || 0,
        bestScore: deck.bestScore || 0,
        averageScore: deck.averageScore || 0,
        lastStudied: deck.updatedAt,
        questions: deck.Deck.Questions
      }
    })
    return decksList;
};

const getDeck = async (deckId) => {
  const deck = await Deck.findOne({
    where: {
      id: deckId
    },
    include: { model: Question}
  });
  return deck;
}

module.exports = {getSavedDecks, getDeck};
