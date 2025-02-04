import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "./Card";

const meta = {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      from: "2018-01-20T12:00Z",
      to: "2018-01-20T12:30Z",
      intensity: {
        forecast: 266,
        actual: 263,
        index: "moderate",
      },
    },
  },
};

export const ModerateIntensity: Story = {
  args: {
    data: {
      from: "2018-01-20T12:00Z",
      to: "2018-01-20T12:30Z",
      intensity: {
        forecast: 266,
        actual: 263,
        index: "moderate",
      },
    },
  },
};

export const HighIntensity: Story = {
  args: {
    data: {
      from: "2018-01-20T12:30Z",
      to: "2018-01-20T13:00Z",
      intensity: {
        forecast: 267,
        actual: 265,
        index: "high",
      },
    },
  },
};

export const LowIntensity: Story = {
  args: {
    data: {
      from: "2018-01-20T13:00Z",
      to: "2018-01-20T13:30Z",
      intensity: {
        forecast: 200,
        actual: 190,
        index: "low",
      },
    },
  },
};

export const VeryHighIntensity: Story = {
  args: {
    data: {
      from: "2018-01-20T13:30Z",
      to: "2018-01-20T14:00Z",
      intensity: {
        forecast: 300,
        actual: 280,
        index: "veryhigh",
      },
    },
  },
};
