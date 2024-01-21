import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
import { filtersReducer } from './filters/filtersSlice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage
};


export const store = configureStore({
  reducer: {
    adverts: persistReducer(persistConfig, advertsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const customMiddlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return customMiddlewares;
  },
});

export const persistor = persistStore(store);