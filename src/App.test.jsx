import { App } from './App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('should render the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
  it('should render the wrong page with 404 error', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-page']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });
  it('should render the profile page', () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Profile page')).toBeInTheDocument();
  });
  it('should render the chats page', () => {
    render(
      <MemoryRouter initialEntries={['/chats']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('first chat')).toBeInTheDocument();
  });
  // it('should open chat when clicking on chats', () => {
  //   render(
  //     <MemoryRouter initialEntries={["/chats"]}>
  //       <App />
  //     </MemoryRouter>
  //   )

  //   fireEvent.click(getByText("first chat"))
  //   expect(screen.getByText("first chat")).toBeInTheDocument();
  // })
  //   it('check bots answer', async () => {
  //     render(<App />);
  //     const inputAuthor = screen.getByPlaceholderText(/author/);
  //     const inputMessage = screen.getByPlaceholderText(/message/);

  //     await fireEvent.change(inputAuthor, { target: { value: 'Max' } });
  //     await fireEvent.change(inputMessage, { target: { value: 'Hello!' } });

  //     await userEvent.click(screen.getByText(/Send message/));

  //     await waitFor(
  //       () => expect(screen.getByText(/Hello from BOT/)).toBeInTheDocument(),
  //       {
  //         timeout: 1600,
  //       }
  //     );
  //   });
});
