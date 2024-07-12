import { configureStore, combineReducers } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice/slice";
import companiesReducer from "./slices/companiesSlice/slice";
import reportsReducer from "./slices/reportsSlice/slice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["config"],
};

const rootReducer = combineReducers({
  config: configReducer,
  companies: companiesReducer,
  reports: reportsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
