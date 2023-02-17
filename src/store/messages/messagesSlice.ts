import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AddMessage, AUTHOR, Messages } from 'src/types';

const initialState: Messages = {
  first: [{ id: nanoid(), author: AUTHOR.USER, text: 'hello chat 1' }],
  second: [{ id: nanoid(), author: AUTHOR.USER, text: 'hello chat 2' }],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      const { author, text } = action.payload.message;
      state[action.payload.chatName].push({
        id: nanoid(),
        author,
        text,
      });
    },
    removeChat: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  (payload: AddMessage, { dispatch }) => {
    const { chatName, message } = payload;

    dispatch(addMessage({ chatName, message }));

    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatName,
            message: { id: nanoid(), author: AUTHOR.BOT, text: 'Im BOT' },
          })
        );
      }, 1500);
    }
  }
);

export const { addChat, addMessage, removeChat } = messagesSlice.actions;

export default messagesSlice.reducer;
