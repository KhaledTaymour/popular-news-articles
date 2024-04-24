import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "src/App";

test("renders Application with header shown", () => {
  render(<App />);
  const headerElement = screen.getByText(/Popular News Articles From NY/i);
  expect(headerElement).toBeInTheDocument();
});
