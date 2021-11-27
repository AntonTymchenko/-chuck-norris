import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchChuckSuccess,
  fetchChuckCategoriesSuccess,
  fetchChuckJokeSuccess,
} from "./chuck-action";

const items = createReducer([], {
  [fetchChuckSuccess]: (_, { payload }) => {
    return payload;
  },
});
const categories = createReducer([], {
  [fetchChuckCategoriesSuccess]: (_, { payload }) => {
    return payload;
  },
});
const joke = createReducer([], {
  [fetchChuckJokeSuccess]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ items, categories, joke });
