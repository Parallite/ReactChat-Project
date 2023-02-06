import { Message } from 'src/types';
import { AddChat, AddMessage, RemoveChat } from './types';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const REMOVE_CHAT = 'MESSAGES::REMOVE_CHAT';

export const addChat = (chatName: string): AddChat => ({
  type: ADD_CHAT,
  chatName,
});

export const addMessage = (
  chatName: string,
  newMessage: Message
): AddMessage => ({
  type: ADD_MESSAGE,
  chatName,
  newMessage,
});

export const removeChat = (chatName: string): RemoveChat => ({
  type: REMOVE_CHAT,
  chatName,
});
