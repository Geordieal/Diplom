import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import addItems from "./reducer/cartReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  addItems,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer, persistStore };
