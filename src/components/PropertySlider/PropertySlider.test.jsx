import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PropertySlider from "./PropertySlider";

describe("PropertySlider", () => {
  test("shows message when no properties provided", () => {
    render(<PropertySlider />);
    expect(screen.getByText(/no properties available/i)).toBeInTheDocument();
  });

  test("renders first property when properties provided", () => {
    const mockProperties = [
      { id: 1, picture: "img1.jpg", price: 100000, location: "BR1" },
      { id: 2, picture: "img2.jpg", price: 200000, location: "BR2" },
    ];

    render(<PropertySlider properties={mockProperties} />);

    // should render first item at start
    expect(screen.getByText("BR1")).toBeInTheDocument();
    expect(screen.getByText(/£100,000/)).toBeInTheDocument();
  });
});