import { cryptoApi } from "../../API/api";

const ALL_CURRENCIES = "ALL_CURRENCIES"
const ADD_PRICE = "ADD_PRICE";
const ADD_PAIRS = "ADD_PAIRS";
const ADD_PAIR1 = "ADD_PAIR1";
const ADD_PAIR2 = "ADD_PAIR2";
const ADD_PAIR3 = "ADD_PAIR3";

const initialState = {
  currencies: [],
  price: [],
  pairs: [],
  pair1: null,
  pair2: null,
  pair3: null,
};

export const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies
      };
    case ADD_PRICE:
      return {
        ...state,
        price: action.price
      }
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
const setAllCurrencies = (currencies) => ({ type: ALL_CURRENCIES, currencies });
const setPrice = (price) => ({type: ADD_PRICE, price});
const setPairs = (pair1, pair2, pair3) => ({ type: ADD_PAIRS, pair1, pair2, pair3 });
export const setPair1 = (pair1) => ({ type: ADD_PAIR1, pair1 });
export const setPair2 = (pair2) => ({ type: ADD_PAIR2, pair2 });
export const setPair3 = (pair3) => ({ type: ADD_PAIR3, pair3 });

// THUNK CREATORS
export const fetchAllCurrencies = () => async (dispatch) => {
  let response = await cryptoApi.getAllCurrencies();
  response = response.filter((item) => item.status === "TRADING");
  dispatch(setAllCurrencies(response));
}

export const fetchPairs = ( pair1, pair2, pair3 ) => async (dispatch) => {
  const response = await cryptoApi.getPairs(pair1, pair2, pair3);
  dispatch(setPairs(response[0], response[1], response[2]));
}

export const fetchPrice = (currencies) => async (dispatch) => {
  let response = await cryptoApi.getPrice()
  if(currencies.length !==0) {
    const allPrices = currencies.map(x => {
      const filterPrice = response.find(y => y.symbol === x.symbol)
      return filterPrice
    })
    dispatch(setPrice(allPrices))
  }
}