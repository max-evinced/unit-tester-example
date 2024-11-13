/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

it("App Router: Works with Client Components (React State)", async () => {
  render(<Counter />);
  expect(screen.getByRole("count")).toHaveTextContent("0");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("count")).toHaveTextContent("1");
  
  const evincedResult = await EvincedUT.analyzeButton(screen.getByRole("button"));
  // console.log(evincedResult);
  expect(evincedResult).toHaveNoWarnings();
});

it("Links should be accessible", async () => {
  render(<Counter/>);
  const evincedLinkTest = await EvincedUT.analyzeLink(screen.getByRole("link"));
  console.log(evincedLinkTest);
  expect(evincedLinkTest).toHaveNoFailures();
});
