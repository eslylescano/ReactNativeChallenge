import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";
import { IntensityList } from "./IntensityList";

const meta = {
  title: "IntensityList",
  component: IntensityList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IntensityList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        from: "2018-01-20T12:00Z",
        to: "2018-01-20T12:30Z",
        intensity: {
          forecast: 266,
          actual: 263,
          index: "moderate",
        },
      },
      {
        from: "2018-01-20T12:30Z",
        to: "2018-01-20T13:00Z",
        intensity: {
          forecast: 267,
          actual: 265,
          index: "high",
        },
      },
      {
        from: "2018-01-20T13:00Z",
        to: "2018-01-20T13:30Z",
        intensity: {
          forecast: 200,
          actual: 190,
          index: "low",
        },
      },
      {
        from: "2018-01-20T13:30Z",
        to: "2018-01-20T14:00Z",
        intensity: {
          forecast: 300,
          actual: 280,
          index: "veryhigh",
        },
      },
    ],
  },
};
