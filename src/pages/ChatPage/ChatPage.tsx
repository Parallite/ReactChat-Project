import { nanoid } from 'nanoid';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { addMessage } from 'src/store/messages/actions';
import { selectMessages } from 'src/store/messages/selectors';
import { AUTHOR } from 'src/types';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            id: nanoid(),
            text: 'Hello from BOT',
            author: AUTHOR.BOT,
          })
        );
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, dispatch]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div>
        <ChatList />
      </div>
      <div>
        <MessageList messageList={chatId ? messages[chatId] : []} />
        <Form />
      </div>
    </>
  );
};
