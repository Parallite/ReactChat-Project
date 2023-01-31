export interface Message {
  id: number;
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
