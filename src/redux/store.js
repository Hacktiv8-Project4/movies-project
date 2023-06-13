import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import persistConfig from "../config/persistConfig";
import moviesSlice from "./slices/moviesSlice";
import savedSlice from "./slices/savedSlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
  saved: savedSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
