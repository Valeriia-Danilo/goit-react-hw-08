import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/slice";
import filterReducer from "../redux/filters/slice";
import authReducer from "../redux/auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactReducer, 
        filters: filterReducer,
        auth: persistedAuthReducer,
    },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
});

export const persistor = persistStore(store);