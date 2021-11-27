import { createAction } from "@reduxjs/toolkit";

export const fetchChuckRequest = createAction("chuck/fetchChuckRequest");
export const fetchChuckSuccess = createAction("chuck/fetchChuckSuccess");
export const fetchChuckError = createAction("chuck/fetchChuckError");

export const fetchChuckCategoriesRequest = createAction(
  "chuck/fetchChuckCategoriesRequest"
);
export const fetchChuckCategoriesSuccess = createAction(
  "chuck/fetchChuckCategoriesSuccess"
);
export const fetchChuckCategoriesError = createAction(
  "chuck/fetchChuckCategoriesError"
);

export const fetchChuckJokeRequest = createAction(
  "chuck/fetchChuckJokeRequest"
);
export const fetchChuckJokeSuccess = createAction(
  "chuck/fetchChuckJokeSuccess"
);
export const fetchChuckJokeError = createAction("chuck/fetchChuckJokeError");
