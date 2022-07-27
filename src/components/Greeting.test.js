import { render, screen } from "@testing-library/react";
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
