export interface Message {
  id: string;
  author: AUTHOR;
  text: string;
}

export type Messages = Record<string, Message[]>;

export enum AUTHOR {
  USER = 'USER',
  BOT = 'BOT',
}

export interface Chat {
  id: string;
  name: string;
}

export interface AddMessage {
  chatName: string;
  message: Message;
}
