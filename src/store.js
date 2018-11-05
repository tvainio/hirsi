import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import api from "./api";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

export default store;
