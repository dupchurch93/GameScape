// routes to put in to get decks when on frontend route /gates
// gates will give all saved decks
// gates/explore will be for browsing or searching
// dungeon/:id will be for looking at an individual deck
// dungeon/:id/combat will be for studying a deck
// dungeon/:id/victory will be for completing a deck
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { getSavedDecks, getDeck } = require("../../utils/helperFunctions");
const { Deck, SavedDeck } = require("../../db/models");

//get all saved deck for a specific user
router.get(
  "/savedDecks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { user } = req;
    //define my function to get all decks of current userId
    const decksList = await getSavedDecks(user.id);
    // console.log("deck questions-----", decksList[2].questions[0])
    return res.json({ decksList });
  })
);

//get an individual deck
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const deckId = parseInt(req.params.id);
    const deck = await getDeck(deckId);
    // console.log(deck.Questions)
    return res.json({ deck });
  })
);

//update a savedDeck
router.patch(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const deck = await SavedDeck.update(
      {
        averageScore: req.body.averageScore,
        bestScore: req.body.bestScore,
        timesStudied: req.body.timesStudied,
      },
      {
        where: {userId: user.id, deckId: req.params.id}
      }
    );
    return res.json("updated correctly");
  })
);

//get all decks that a user does not have saved
router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const decks = await Deck.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.json({ decks });
  })
);

module.exports = router;
