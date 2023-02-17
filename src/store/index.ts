import { configureStore, combineReducers } from '@reduxjs/toolkit';
import messagesReducer from './messages/messagesSlice';
import { profileReducer } from './profile/profileSlice';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { articlesReducer } from './articles/articlesSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['articles', 'profile'],
// };

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  articles: articlesReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// export const persistor = persistStore(store);
