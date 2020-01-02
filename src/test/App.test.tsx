import React from "react";
import { render } from "@testing-library/react";
import HomePage from "pages/HomePage";

test("renders Home page", () => {
  const { getByText } = render(<HomePage />);
  const linkElement = getByText(/Home page/i);
  expect(linkElement).toBeInTheDocument();
});
