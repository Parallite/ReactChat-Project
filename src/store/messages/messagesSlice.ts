import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AUTHOR, Messages } from 'src/types';

const initialState: Messages = {
  first: [{ id: nanoid(), author: AUTHOR.USER, text: 'hello chat 1' }],
  second: [{ id: nanoid(), author: AUTHOR.USER, text: 'hello chat 2' }],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat(state, action) {
      state[action.payload] = [];
    },
    addMessage(state, action) {
      state[action.payload[0]].push(action.payload[1]);
    },
    removeChat(state, action) {
      delete state[action.payload];
    },
  },
});

export const { addChat, addMessage, removeChat } = messagesSlice.actions;

export default messagesSlice.reducer;
