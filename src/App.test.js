import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders and inputs work", async () => {
  render(<App />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole("button", /submit/i);

  fireEvent.change(firstNameInput, { target: { value: "David" } });
  fireEvent.change(lastNameInput, { target: { name: "lastName", value: "Hall" }, });
  fireEvent.change(emailInput, { target: { value: "me@me.com" } });
  fireEvent.change(messageInput, { target: { value: "Test message for testing" },});
  fireEvent.click(submitButton);

  const checkFirstName = await screen.findByText(/david/i);
  expect(checkFirstName).toBeInTheDocument();

  const checkLastName = await screen.findByText(/hall/i);
  expect(checkLastName).toBeInTheDocument();

  //all in one option
  expect(await screen.findByText(/me@me.com/i)).toBeInTheDocument();
});