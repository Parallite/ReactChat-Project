import { ChatList } from './ChatList';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('ChatList component', () => {
  it('should render the ChatList component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats']}>
          <ChatList />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('first')).toBeInTheDocument();
  });
  it('test create a new chat', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats']}>
          <ChatList />
        </MemoryRouter>
      </Provider>
    );
    await userEvent.type(screen.getByRole('textbox'), 'New Chat!');
    await userEvent.click(screen.getByText(/create chat/));
    expect(screen.getAllByRole('link').length).toBe(3);
  });
  it('test remove chat', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats']}>
          <ChatList />
        </MemoryRouter>
      </Provider>
    );
    await userEvent.click(screen.getByText(/Delete first chat/));
    expect(screen.getAllByRole('link').length).toBe(2);
  });
});
