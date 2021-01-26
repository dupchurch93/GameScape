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
const { User, Deck, SavedDeck } = require("../../db/models");

router.get(
  "/savedDecks",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    //define my function to get all decks of current userId
    const getUser = async (userId) => {
        const userWithDeck = await User.findOne({
            where: {
                id: userId
            },
            include: { model: Deck}
        });
        return userWithDeck;
    };
    const userWithDeck = await getUser(user.id);
    const savedDecks = userWithDeck.Decks;
    console.log(savedDecks[0].SavedDeck)
    return res.json({savedDecks});
  })
);

module.exports = router;
