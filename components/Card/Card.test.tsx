import { render, screen } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";
import * as stories from "./Card.stories";

const {
  Default,
  ModerateIntensity,
  HighIntensity,
  LowIntensity,
  VeryHighIntensity,
} = composeStories(stories);

describe("Card Component", () => {
  it("renders Default story correctly", () => {
    render(<Default />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
    expect(screen.getByText("12:00 - 12:30")).toBeTruthy();
    expect(screen.getByText("266")).toBeTruthy();
    expect(screen.getByText("263")).toBeTruthy();
    expect(screen.getByText("Moderate")).toBeTruthy();
  });

  it("renders Moderate Intensity story correctly", () => {
    render(<ModerateIntensity />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
    expect(screen.getByText("12:00 - 12:30")).toBeTruthy();
    expect(screen.getByText("266")).toBeTruthy();
    expect(screen.getByText("263")).toBeTruthy();
    expect(screen.getByText("Moderate")).toBeTruthy();
  });

  it("renders High Intensity story correctly", () => {
    render(<HighIntensity />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
    expect(screen.getByText("12:30 - 13:00")).toBeTruthy();
    expect(screen.getByText("267")).toBeTruthy();
    expect(screen.getByText("265")).toBeTruthy();
    expect(screen.getByText("High")).toBeTruthy();
  });

  it("renders Low Intensity story correctly", () => {
    render(<LowIntensity />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
    expect(screen.getByText("13:00 - 13:30")).toBeTruthy();
    expect(screen.getByText("200")).toBeTruthy();
    expect(screen.getByText("190")).toBeTruthy();
    expect(screen.getByText("Low")).toBeTruthy();
  });

  it("renders Very High Intensity story correctly", () => {
    render(<VeryHighIntensity />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
    expect(screen.getByText("13:30 - 14:00")).toBeTruthy();
    expect(screen.getByText("300")).toBeTruthy();
    expect(screen.getByText("280")).toBeTruthy();
    expect(screen.getByText("Very High")).toBeTruthy();
  });
});
