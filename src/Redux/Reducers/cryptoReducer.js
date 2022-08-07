const ALL_CURRENCIES = "ALL_CURRENCIES"
const ADD_PAIRS = "ADD_PAIRS";
const ADD_PAIR1 = "ADD_PAIR1";
const ADD_PAIR2 = "ADD_PAIR2";
const ADD_PAIR3 = "ADD_PAIR3";

const initialState = {
  currencies: [],
  pairs: [],
  pair1: 'ETHUSDT',
  pair2: 'SOLETH',
  pair3: 'SOLUSDT',
};

export const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CURRENCIES:
      return {
        ...state,
        currencies: [action.currencies]
      };
    case ADD_PAIRS:
      return {
        ...state,
        pairs: [action.pair1, action.pair2, action.pair3],
      };
    case ADD_PAIR1:
      return {
        ...state,
        pair1: action.pair1,
      };
    case ADD_PAIR2:
      return {
        ...state,
        pair2: action.pair2,
      };
    case ADD_PAIR3:
      return {
        ...state,
        pair3: action.pair3,
      };    
    default:
      return state;
  }
};

// ACTION CREATORS

export const setAllCurrencies = (currencies) => ({ type: ALL_CURRENCIES, currencies });
export const setPairs = (pair1, pair2, pair3) => ({ type: ADD_PAIRS, pair1, pair2, pair3 });
export const setPair1 = (pair1) => ({ type: ADD_PAIR1, pair1 });
export const setPair2 = (pair2) => ({ type: ADD_PAIR2, pair2 });
export const setPair3 = (pair3) => ({ type: ADD_PAIR3, pair3 });
