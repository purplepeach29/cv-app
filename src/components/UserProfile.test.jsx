import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';
import { test, expect } from 'vitest';
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

test("loading state", ()=>{
    render(<UserProfile />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
})

test("Success state", async()=>{
    render(<UserProfile />);
    
    expect(await screen.findByText(/john doe/i)).toBeInTheDocument();
})

test("error state", async()=>{
    server.use(
    http.get("/api/user", () => {
      return HttpResponse.json(
        { message: "Server Error" },
        { status: 500 }
      );
    })
  );

    render(<UserProfile />);
    expect(await screen.findByText(/Failed to load user./i)).toBeInTheDocument();

})
