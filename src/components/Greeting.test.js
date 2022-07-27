import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
test("tset hello world", () => {
  //Arrenge
  render(<Greeting />);
  //Act
  //...

  //Assert
  const helloWorldEle = screen.getByText("Hello World", { exact: false });
  expect(helloWorldEle).toBeInTheDocument();
});

test("Is Paragraph Shown", () => {
  render(<Greeting />);
  const ParagraphEle = screen.getByText("It's Good To See You!", {
    exact: true,
  });
  expect(ParagraphEle).toBeInTheDocument();
});

test("render Changed", () => {
  render(<Greeting />);
  const btnEle = screen.getByText("Change Text!");
  userEvent.click(btnEle);

  const Paragraph = screen.getByText("Changed", { exact: false });
  expect(Paragraph).toBeInTheDocument();
});

test("First Paragraph is not shown", () => {
  render(<Greeting />);
  const btn = screen.getByRole("button");
  userEvent.click(btn);

  const FirstPa = screen.queryByText("It's Good To See You!");
  expect(FirstPa).toBeNull;
});
