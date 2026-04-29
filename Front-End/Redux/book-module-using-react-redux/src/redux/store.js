import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";
import { bookReducer } from "./reducer/bookReducer";

const persistConfig = {
  key: "books",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  bookReducer
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
