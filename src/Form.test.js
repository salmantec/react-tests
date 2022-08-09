import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NameForm } from "./Form";

describe("NameForm", () => {
  it("will display an error if the name is not provided.", () => {
    let component = render(<NameForm />);

    let submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("error-header")).toBeInTheDocument();
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will display a success message if the name is provided", () => {
    let component = render(<NameForm />);

    let input = component.getByTestId("name-input");
    fireEvent.change(input, { target: { value: "Mike" } });
    let submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("success-header")).toBeInTheDocument();
    expect(component.queryByTestId("error-header")).not.toBeInTheDocument();
  });
});
