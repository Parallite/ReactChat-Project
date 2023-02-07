import { nanoid } from 'nanoid';
import { RootState } from '..';

export const selectMessages = (state: RootState) => state.messages;
export const selectChats = (state: RootState) =>
  Object.keys(state.messages).map((chatName) => ({
    id: nanoid(),
    name: chatName,
  }));
