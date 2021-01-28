import fetch from "./csrf";

const SET_DECKS = "session/SET_DECKS";
const REMOVE_DECKS = "session/REMOVE_DECKS";

const initialSessionState = { deckList: {} };

const setDecks = (DecksData) => ({
  type: SET_DECKS,
  payload: DecksData,
});

export const removeDecks = () => ({
  type: REMOVE_DECKS,
});

export const getDecksThunk = () => async (dispatch) => {
  const res = await fetch("/api/decks/savedDecks");
  if (res.ok) {
    dispatch(setDecks(res.data.decksList));
  }
  return res;
};

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
