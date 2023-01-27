import { App } from './App';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
  it('render App component', () => {
    render(<App />);
  });
  it('check bots answer', async () => {
    render(<App />);
    const inputAuthor = screen.getByPlaceholderText(/author/);
    const inputMessage = screen.getByPlaceholderText(/message/);

    await fireEvent.change(inputAuthor, { target: { value: 'Max' } });
    await fireEvent.change(inputMessage, { target: { value: 'Hello!' } });

    await userEvent.click(screen.getByText(/Send message/));

    await waitFor(
      () => expect(screen.getByText(/Hello from BOT/)).toBeInTheDocument(),
      {
        timeout: 1600,
      }
    );
  });
});
