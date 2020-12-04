import React from 'react';
import { render,fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';
// import { act } from 'react-dom/test-utils';

test("It's working!!!", () => {
    const result = render(<ContactForm />);
})

test("test the label text of first name", () => {
    const { getByLabelText, getByTestId } = render(<ContactForm />);

    const firstName = getByLabelText(/First/);
    expect(firstName).toBeInTheDocument();

    const firstNameId = getByTestId("firstName");
    expect(firstNameId).toBeInTheDocument();
});


test("Test Form Inputs",  () => {
    // eslint-disable-next-line no-unused-expressions
    async () => {const {getByLabelText, getByTestId} = render(<ContactForm />)

    const firstNameInput = getByLabelText(/First/i);
    const lastNameInput = getByLabelText(/Last/i);
    const emailInput = getByLabelText(/Email/i);
    const messageInput = getByLabelText(/Message/i);
    const passwordInput = getByLabelText(/password/i)

    fireEvent.change(firstNameInput, {target: {value:"John"}});
    fireEvent.change(lastNameInput, {target: {value:"Smith"}});
    fireEvent.change(emailInput, {target: {value:"myEmail@email.com"}})
    fireEvent.change(messageInput, {target: {value:"Writing a messgae."}})
    fireEvent.change(passwordInput, {target: {value:"turnips4343"}})

   expect(firstNameInput.value).toBe("John");
   expect(lastNameInput.value).toBe("Smith");
   expect(emailInput.value).toBe("myEmail@mail.com");
   expect(messageInput.value).toBe("Writing a message.");
   expect(messageInput.value).toBe("turnips4343");

   fireEvent.click(getByTestId("submit"));}
})
