import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

function Search({ onSearch = () => {} }) {
  const [q, setQ] = React.useState("");

  return (
    <div>
      <input
        aria-label="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(q);
        }}
      />
      <button onClick={() => onSearch(q)}>Search</button>
      <div data-testid="value">{q}</div>
    </div>
  );
}

test("renders input and button", () => {
  render(<Search />);
  expect(screen.getByLabelText("search-input")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test("updates value on input and calls onSearch on button click", () => {
  const handle = vi.fn();
  render(<Search onSearch={handle} />);

  const input = screen.getByLabelText("search-input");
  fireEvent.change(input, { target: { value: "hello" } });

  expect(screen.getByTestId("value")).toHaveTextContent("hello");

  fireEvent.click(screen.getByText("Search"));
  expect(handle).toHaveBeenCalledWith("hello");
});

test("calls onSearch when pressing Enter", () => {
  const handle = vi.fn();
  render(<Search onSearch={handle} />);

  const input = screen.getByLabelText("search-input");
  fireEvent.change(input, { target: { value: "world" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  expect(handle).toHaveBeenCalledWith("world");
});