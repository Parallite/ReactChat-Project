import { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { AUTHOR, Chat, Message, Messages } from 'src/types';

interface ChatPageProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  messageList: Messages;
  onAddMessage: (chatId: string, msg: Message) => void;
  onRemoveChat: (chatId: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
  chats,
  onAddChat,
  messageList,
  onAddMessage,
  onRemoveChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messageList[chatId]?.length > 0 &&
      messageList[chatId][messageList[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          id: Math.random() * 1000,
          text: 'Hello from BOT',
          author: AUTHOR.BOT,
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messageList, onAddMessage]);

  if (chatId && !messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div>
        <ChatList
          chats={chats}
          onAddChat={onAddChat}
          onRemoveChat={onRemoveChat}
        />
      </div>
      <div>
        <MessageList messageList={chatId ? messageList[chatId] : []} />
        <Form addNewMessage={onAddMessage} />
      </div>
    </>
  );
};
