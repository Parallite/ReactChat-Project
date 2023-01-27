export interface Message {
  id: number;
  author: AUTHOR;
  text: string;
}

export type Messages = Message[];

export enum AUTHOR {
  USER = 'USER',
  BOT = 'BOT',
}
