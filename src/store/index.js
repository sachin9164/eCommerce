import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import categoriesReducer from "./categories";
import itemsReducer from "./items";
import cartReducer from "./cart";

const reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  items: itemsReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
