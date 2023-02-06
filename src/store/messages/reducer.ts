import { nanoid } from 'nanoid';
import { Reducer } from 'redux';
import { AUTHOR, Messages } from 'src/types';
import { ADD_CHAT, ADD_MESSAGE, REMOVE_CHAT } from './actions';
import { MessagesActions } from './types';

const initialState: Messages = {
  first: [{ id: nanoid(), author: AUTHOR.USER, text: 'hello chat 1' }],
  second: [{ id: nanoid(), author: AUTHOR.USER, text: 'hello chat 2' }],
};

export const messagesReducer: Reducer<Messages, MessagesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [...state[action.chatName], action.newMessage],
      };
    }
    case REMOVE_CHAT: {
      const messages = { ...state };
      delete messages[action.chatName];
      return messages;
    }
    default:
      return state;
  }
};
