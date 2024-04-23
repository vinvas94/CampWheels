import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertReducer } from './advertSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoriteSlice';

const favoritePersistConfig = {
  key: 'favorites',
  storage,
};

export const reducer = {
  adverts: advertReducer,
  filter: filterReducer,
  favorites: persistReducer(favoritePersistConfig, favoritesReducer),
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
