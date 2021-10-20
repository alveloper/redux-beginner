import { applyMiddleware, createStore } from "redux";
import rootReducer from "../duck";
import { forbiddenWordsMiddleware } from "../middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store;
