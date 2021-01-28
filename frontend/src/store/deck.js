import fetch from "./csrf";

const SET_DECKS = "session/SET_DECKS";
const REMOVE_DECKS = "session/REMOVE_DECKS";

const initialSessionState = { decks: null };

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
      newState.decks = action.payload;
      return newState;
    case REMOVE_DECKS:
      newState = Object.assign({}, state);
      newState.decks = null;
      return newState;
    default:
      return state;
  }
};

export default deckReducer;
