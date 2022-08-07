import { render } from "@testing-library/react";
import * as React from "react";
import App from "./App";

describe("App", () => {
  it("will have all expected fields", () => {
    let component = render(<App />);

    let labels = component.getAllByText(/name/);
    expect(labels.length).toEqual(2);

    let firstNameInput = component.getByTestId("first-name-input");
    let lastNameInput = component.getByTestId("last-name-input");
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    let submitButton = component.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });
});
