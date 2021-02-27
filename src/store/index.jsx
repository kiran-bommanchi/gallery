import {combineReducers,applyMiddleware,createStore} from "redux"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import firstreducer from "./reducers/firstreducer"
import thunk from 'redux-thunk';

let reducers = combineReducers({
    firstreducer,
  });

  const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["firstreducer"], //only navigation will be persisted
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
let middleware = applyMiddleware(thunk);

if (window.__REDUX_DEVTOOLS_EXTENSION__)
  middleware = window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(persistedReducer, middleware);

export default store;