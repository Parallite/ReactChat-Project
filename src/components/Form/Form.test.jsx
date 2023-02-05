// import { Form } from './Form';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';
// // import userEvent from '@testing-library/user-event';

// describe('Form component', () => {
//   beforeEach(() => {
//     render(<Form />);
//   });
//     it('render Form component', () => {});
//     it('render input elements', () => {
//       expect(screen.getAllByRole(/textbox/).length).toBe(2);
//     });
//   });
//   it('render input elements with placeholder author', () => {
//     expect(screen.getByPlaceholderText(/author/)).toBeInTheDocument();
//   });
//   it('render input element with placeholder message', () => {
//     expect(screen.getByPlaceholderText(/message/)).toBeInTheDocument();
//   });
//   it('render button element', () => {
//     expect(screen.getByText(/Send message/)).toBeInTheDocument();
//   });
//   it('button is disabled', () => {
//     expect(screen.getByText(/Send message/)).toBeDisabled();
//   });
//   it('button is not disabled with inputs filled', () => {
//     const inputAuthor = screen.getByPlaceholderText(/author/);
//     const inputMessage = screen.getByPlaceholderText(/message/);

//     fireEvent.change(inputAuthor, { target: { value: 'Maxim' } });
//     fireEvent.change(inputMessage, { target: { value: 'Hello World!' } });

//     expect(inputAuthor.value).toBe('Maxim');
//     expect(inputMessage.value).toBe('Hello World!');
//     expect(screen.getByText(/Send message/)).not.toBeDisabled();
//   });
// });

// describe('Form component', () => {
//   it('test addNewMessage func', async () => {
//     const addNewMessage = jest.fn();
//     render(<Form addNewMessage={addNewMessage} />);

//     const inputAuthor = screen.getByPlaceholderText(/author/);
//     const inputMessage = screen.getByPlaceholderText(/message/);

//     await fireEvent.change(inputAuthor, { target: { value: 'Maxim' } });
//     await fireEvent.change(inputMessage, { target: { value: 'Hello World!' } });

//     await userEvent.click(screen.getByText(/Send message/));
//     expect(addNewMessage).toHaveBeenCalledTimes(1);
//   });
