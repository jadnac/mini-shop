import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducers";
import thunk from "redux-thunk";


export const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};
