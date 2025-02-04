import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "./.storybook/preview";
import "@testing-library/react-native/extend-expect";

jest.useFakeTimers();

jest.mock('expo-font', () => ({
    loadAsync: jest.fn().mockResolvedValue(true),
    isLoaded: jest.fn().mockReturnValue(true),
  }));

setProjectAnnotations([previewAnnotations]);
