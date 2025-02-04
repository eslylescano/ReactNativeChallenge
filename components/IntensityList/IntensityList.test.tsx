import { render, screen } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";
import * as stories from "./IntensityList.stories";

const { Default } = composeStories(stories);

describe("IntensityList Component", () => {
  it("renders the list without crashing", () => {
    render(<Default />);
    expect(screen.getByTestId("IntensityList")).toBeTruthy();
  });

  it("renders the correct number of intensity items", () => {
    const { getAllByTestId } = render(<Default />);
    expect(getAllByTestId("CardContainer").length).toBe(4);
  });
});
