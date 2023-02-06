import { Message } from 'src/types';
import { ADD_CHAT, ADD_MESSAGE, REMOVE_CHAT } from './actions';

export type MessagesActions = AddChat | AddMessage | RemoveChat;

export interface AddChat {
  type: typeof ADD_CHAT;
  chatName: string;
}

export interface AddMessage {
  type: typeof ADD_MESSAGE;
  chatName: string;
  newMessage: Message;
}

export interface RemoveChat {
  type: typeof REMOVE_CHAT;
  chatName: string;
}
