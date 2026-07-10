import { render, screen } from "@testing-library/react";
import { beforeEach, test, expect, beforeAll } from 'vitest';
import PersonalForm from "./PersonalForm";
import userEvent from "@testing-library/user-event";

beforeEach(()=>{
        render(<PersonalForm/>);

})

test("renders heading", ()=>{
    expect(
        screen.getByRole("heading", {
            level: 2,
            name: "Personal Details",
        })
    ).toBeInTheDocument();
})

test("renders inputfields", ()=> {
     expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
     expect(screen.getByLabelText("Email")).toBeInTheDocument();
     expect(screen.getByLabelText("Phone")).toBeInTheDocument();
})

test("renders button",()=>{
    expect(screen.getByRole('button',{
        name:'Save'
    })).toBeInTheDocument();
})

test("can type", async()=>{
    const user = userEvent.setup();
    await user.type(screen.getByLabelText('Full Name'), 'Test user')
    expect(screen.getByLabelText('Full Name')).toHaveValue('Test user')
})

test("shows validation message when required fields are empty", async()=>{
    const user = userEvent.setup();
    await user.click(screen.getByRole("button",{
        name:'Save'
    }));
    expect(screen.getByText("All fields are required")).toBeInTheDocument();
})

test("shows success message when form is submitted successfully", async()=>{
    const user = userEvent.setup();
    await user.type(screen.getByLabelText('Full Name'), 'Test user');
    await user.type(screen.getByLabelText('Email'), 'Test@gm.com');
    await user.type(screen.getByLabelText('Phone'), '123456');

    await user.click(screen.getByRole("button",{
        name:'Save'
    }));
    expect(screen.getByText("Saved Successfully!")).toBeInTheDocument();
})