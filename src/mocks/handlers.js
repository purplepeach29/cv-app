import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json({
      name: "John Doe",
      email: "john@example.com",
    });
  }),
];