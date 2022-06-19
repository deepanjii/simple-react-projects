import Todo from "../Todo";
import React from "react";
import { render } from "@testing-library/react";

describe("Todo", () => {
  test('renders without error', async () => {
    const { getByText } =  render(<Todo />);
    expect(getByText(/todo/i)).toBeTruthy();
  });
});
