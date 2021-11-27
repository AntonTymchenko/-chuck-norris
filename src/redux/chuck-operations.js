import axios from "axios";

import {
  fetchChuckRequest,
  fetchChuckSuccess,
  fetchChuckError,
  fetchChuckCategoriesRequest,
  fetchChuckCategoriesSuccess,
  fetchChuckCategoriesError,
  fetchChuckJokeRequest,
  fetchChuckJokeSuccess,
  fetchChuckJokeError,
} from "./chuck-action";

axios.defaults.baseURL = "https://api.chucknorris.io/jokes";

export const fetchChuck = () => async (dispatch) => {
  dispatch(fetchChuckRequest());
  try {
    const { data } = await axios.get("/random");
    dispatch(fetchChuckSuccess(data));
  } catch (error) {
    dispatch(fetchChuckError());
  }
};

export const fetchChuckCategories = () => async (dispatch) => {
  dispatch(fetchChuckCategoriesRequest());
  try {
    const { data } = await axios.get("/categories");
    dispatch(fetchChuckCategoriesSuccess(data));
  } catch (error) {
    dispatch(fetchChuckCategoriesError());
  }
};
export const fetchChuckJoke = (category) => async (dispatch) => {
  dispatch(fetchChuckJokeRequest());
  try {
    const { data } = await axios.get(`/random?category=${category}`);
    dispatch(fetchChuckJokeSuccess(data));
  } catch (error) {
    dispatch(fetchChuckJokeError());
  }
};
