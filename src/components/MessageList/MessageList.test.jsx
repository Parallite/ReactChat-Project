import { MessageList } from "./MessageList";
import { render, screen } from "@testing-library/react";

describe("MessageList component", () => {
  it("render MessageList", () => {
    render(<MessageList messageList={[]} />);
  });
  it("render message to MessageList comp", () => {
    const message = {
      id: 1,
      text: "Hello",
      author: 'Maxim',
    };
    render(<MessageList messageList={[message]} />);
    expect(screen.getAllByTestId(/message-test/).length).toBe(2);
  });
});
