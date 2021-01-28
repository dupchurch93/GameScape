import fetch from "./csrf";

const SET_DECKS = "session/SET_DECKS";
const REMOVE_DECKS = "session/REMOVE_DECKS";

const initialSessionState = { deck: null };

const setDecks = (DecksData) => ({
  type: SET_Decks,
  payload: DecksData,
});

export const removeDecks = () => ({
  type: REMOVE_Decks,
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
    case SET_DECK:
      newState = Object.assign({}, state);
      newState.deck = action.payload;
      return newState;
    case REMOVE_DECK:
      newState = Object.assign({}, state);
      newState.deck = null;
      return newState;
    default:
      return state;
  }
};

export default deckReducer;
