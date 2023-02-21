import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC<any> = ({ chats, messages}) => {
  const { chatId } = useParams();
  // const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  const prepareMessages = [
    ...Object.values((chatId && messages[chatId].messages) || {})
  ]

  return (
    <>
      <div>
        <ChatList chats={chats}/>
      </div>
      <div>
        <MessageList messageList={prepareMessages} />
        <Form />
      </div>
    </>
  );
};
