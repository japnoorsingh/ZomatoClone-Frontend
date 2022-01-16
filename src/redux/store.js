import { createStore, applyMiddleware } from "redux";  // applyMiddleware -> provides various packages. + Middlewares add the asynchronous featue to redux.
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
// Reducers -> Update state of store

// redux middlewares
const middlewares = [thunk];  // thunk -> used to create async requests

if (process.env.NODE_ENV === "development") {  // env file is by default present in react. NODE_ENV is also present by default (development or production)
  const { logger } = require("redux-logger");  // logger -> used for debugging your application
  middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;