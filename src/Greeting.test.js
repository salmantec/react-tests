import { render } from "@testing-library/react";
import * as React from "react";
import Greeting from "./Greeting";

describe("Greetings", () => {
  it("matches the snapshot when a name is passed", () => {
    let component = render(<Greeting name={"Mike"} />);
    expect(component).toMatchSnapshot();
  });

  it("matches the snapshot when no name is passed", () => {
    let component = render(<Greeting />);
    expect(component).toMatchSnapshot();
  });
});
