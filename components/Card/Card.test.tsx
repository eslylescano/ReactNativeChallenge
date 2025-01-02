import { render, screen } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";

import * as stories from "./Card.stories";
const { Default } = composeStories(stories);

describe("Card", () => {
  it("renders correctly", () => {
    render(<Default />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();
  });
});
