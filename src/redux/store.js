import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountReducer from "./accountSlice";
import cartReducer from "./cartSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["account"],
};

const reducers = combineReducers({
  account: accountReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
