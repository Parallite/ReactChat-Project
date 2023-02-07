import { App } from './App';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

describe('App component', () => {
  it('should render the home page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
  it('should render the wrong page with 404 error', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/wrong-page']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('404 page')).toBeInTheDocument();
  });
  it('should render the Loading... Suspense', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/profile']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });
  it('should render the Profile without Suspense ', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/profile']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Profile page')).toBeInTheDocument();
  });
  it('should render the About page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('About page')).toBeInTheDocument();
  });
  it('should render the chats page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('create chat')).toBeInTheDocument();
  });
  it('should open chat and form when clicking on chats', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    await userEvent.click(screen.getByRole('link', { name: /first/ }));
    await waitFor(() => expect(screen.getByText(/Send/)).toBeInTheDocument());
  });
});
