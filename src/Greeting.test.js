import { render } from "@testing-library/react";
import * as React from "react";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("will match snapshot", () => {
    let component = render(<Greeting />);
    expect(component).toMatchSnapshot();
  });
});
