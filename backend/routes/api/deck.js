// routes to put in to get decks when on frontend route /gates
// gates will give all saved decks
// gates/explore will be for browsing or searching
// dungeon/:id will be for looking at an individual deck
// dungeon/:id/combat will be for studying a deck
// dungeon/:id/victory will be for completing a deck
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { restoreUser } = require("../../utils/auth");
const { getSavedDecks } = require ("../../utils/helperFunctions");

router.get(
  "/savedDecks",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    //define my function to get all decks of current userId
    const decksList = await getSavedDecks(user.id);
    console.log("decks Normalized-----", decksList)
    return res.json({decksList});
  })
);

module.exports = router;
