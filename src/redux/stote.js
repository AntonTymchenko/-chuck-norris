import chuckReducer from "./chuck-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    chuck: chuckReducer,
  },
});
export default store;
