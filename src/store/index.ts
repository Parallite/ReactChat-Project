import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages/messagesSlice';
import profileReducer from './profile/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
