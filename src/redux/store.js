import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

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

const persistedContactReducer = persistReducer(
  {
    key: "saved-contacts",
    storage,
    whitelist: ["items"],
  },
  contactReducer
);


export const store = configureStore({
    reducer: {
    contacts: persistedContactReducer,
    filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
});

export const persistor = persistStore(store);