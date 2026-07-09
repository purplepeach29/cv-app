import { render, screen } from "@testing-library/react";
import { beforeEach, test, expect, vi } from 'vitest';
import PersonalCard from "./PersonalCard";
import userEvent from "@testing-library/user-event";

// beforeEach(() => {
//     render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />);
// })

test("render heading ",()=>{
    render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />);
    expect(screen.getByRole("heading", {level: 3}).textContent).toBe("Personal Information");
})

test("render name",()=> {
    render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />);
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
})


test("render email",()=> {
    render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />);
    expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
})

test("render phone",()=> {
    render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />);
    expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
})

test("render button", ()=>{
    render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />);
    expect(screen.getByRole('button',{
        name:'Edit'
    })).toBeInTheDocument();
})

test("check button click", async()=>{
    const handleEdit=vi.fn();
    render(<PersonalCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" onEdit={handleEdit}/>);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", {
        name:/Edit/
    }))
    expect(handleEdit).toHaveBeenCalledTimes(1);
})