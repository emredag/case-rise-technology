/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import { fireEvent, getByRole, getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IndexPage from "../pages/IndexPage";
import userEvent from "@testing-library/user-event";


test("Some words!", () => {
    const { getByText, } = render(<IndexPage />);

    expect(getByText(/Create New Job/i)).toBeInTheDocument();
    expect(getByText(/Job Name/i)).toBeInTheDocument();
    expect(getByText(/Job Priority/i)).toBeInTheDocument();
    expect(getByText(/Action/i)).toBeInTheDocument();
});


test("255+ characters", () => {

    const { getByTestId, getByPlaceholderText } = render(<IndexPage />);

    const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,. pretium quis,. pretium quis,.";


    userEvent.paste(getByPlaceholderText(/enter/i), lorem);

    fireEvent.click(getByTestId("create-btn"));


    expect(getByTestId("error")).toBeInTheDocument();

});