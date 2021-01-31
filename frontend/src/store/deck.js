import fetch from "./csrf";

const SET_DECKS = "decks/SET_DECKS";
const REMOVE_DECKS = "decks/REMOVE_DECKS";
const UPDATE_DECKS = "decks/UPDATE_DECKS";
const REMOVE_DECK = "decks/REMOVE_DECK";
const ADD_DECK = "decks/ADD_DECK";

const initialSessionState = { deckList: {} };

const setDecks = (DecksData) => ({
  type: SET_DECKS,
  payload: DecksData,
});

export const removeDecks = () => ({
  type: REMOVE_DECKS,
});

const updateDecksScore = (deck) => ({
  type: UPDATE_DECKS,
  payload: deck
});

const removeDeck = (deckId) => ({
  type: REMOVE_DECK,
  payload: deckId
});

const addDeck = (deck) => ({
  type: ADD_DECK,
  payload: deck
})

export const removeDeckThunk = (deckId) => async (dispatch) => {
  const res = await fetch(`/api/decks/savedDecks/${deckId}`, {
    method: "DELETE",
    body: JSON.stringify({deckId})
  });
  if(res.ok){
    dispatch(removeDeck(deckId))
  }
};

export const addDeckThunk = (deck) => async (dispatch) => {
  const res = await fetch(`/api/decks/savedDecks/${deck.id}`, {
    method: "POST",
    body: JSON.stringify({deckId: deck.id})
  });
  if(res.ok){
    dispatch(addDeck(deck));
  }
}

export const getDecksThunk = () => async (dispatch) => {
  const res = await fetch("/api/decks/savedDecks");
  if (res.ok) {
    dispatch(setDecks(res.data.decksList));
  }
  return res;
};

export const updateDeckScoreThunk = (deck) => async (dispatch) => {
  const res = await fetch(`/api/decks/savedDecks/${deck.id}`, {
    method: 'PATCH',
    body: JSON.stringify({averageScore: deck.averageScore, timesStudied: deck.timesStudied, bestScore: deck.bestScore}),
  });
  if(res.ok){
    dispatch(updateDecksScore(deck));
  }
}

const deckReducer = (state = initialSessionState, action) => {
  let newState;
  switch (action.type) {
    case SET_DECKS:
      newState = Object.assign({}, state);
      newState.deckList = decksArrayToObjectHelper(action.payload);
      return newState;
    case REMOVE_DECKS:
      newState = Object.assign({}, state);
      newState.deckList = null;
      return newState;
    case UPDATE_DECKS:
      newState = Object.assign({}, state)
      newState.deckList[action.payload.id] = action.payload;
      return newState;
    case REMOVE_DECK:
      newState = Object.assign({}, state)
      delete newState.deckList[action.payload]
      return newState;
    case ADD_DECK:
      newState = Object.assign({}, state);
      newState.deckList[action.payload.id] = action.payload;
      console.log('our new state aftering adding', newState)
      return newState;
    default:
      return state;
  }
};

export default deckReducer;

const decksArrayToObjectHelper = (decksList) => {
  //deckslist is an array of objects
  const newDecksObject = {};
  decksList.forEach((deck) => {
    newDecksObject[deck.id] = deck;
  });
  return newDecksObject;
}
