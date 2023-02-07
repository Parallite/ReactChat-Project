import { Form } from './Form';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </Provider>
    );
  });
  it('render input element', () => {
    expect(screen.getByRole(/textbox/)).toBeInTheDocument();
  });
  it('render input element with placeholder', () => {
    expect(screen.getByPlaceholderText(/message/)).toBeInTheDocument();
  });
  it('button is disabled', () => {
    expect(screen.getByText(/Send/)).toBeDisabled();
  });
  it('button is not disabled with input text', async () => {
    const inputEl = screen.getByPlaceholderText(/message/);
    fireEvent.change(inputEl, { target: { value: 'Hello Chat APP' } });
    expect(screen.getByText(/Send/)).not.toBeDisabled();
  });
  // it('test clear input after send data', async () => {
  //     const inputEl = screen.getByPlaceholderText(/message/);
  //     fireEvent.change(inputEl, { target: { value: 'Hello Chat APP' } });
  //     await userEvent.click(screen.getByText(/Send/));
  //     expect(screen.findByText(/Hello Chat APP/)).not.toBeInTheDocument();
  // });
});

// describe('ChatList component', () => {
//     it('should render the ChatList component', async () => {
//         render(
//             <Provider store={store}>
//                 <MemoryRouter>
//                     <Form />
//                 </MemoryRouter>
//             </Provider>
//         );

//         const store = setupStore()
//         store.dispatch(todoAdded('Buy milk'))

//         const inputEl = screen.getByPlaceholderText(/message/);
//         fireEvent.change(inputEl, { target: { value: 'Hello Chat APP' } });
//         await userEvent.click(screen.getByText(/Send/));
//         expect(dispatch).toHaveBeenCalledTimes(1)

//         const { getByText } = renderWithProviders(<Form />, { store })
//     })
// })
