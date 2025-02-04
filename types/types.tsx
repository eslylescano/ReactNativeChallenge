export type IntensityData = {
  forecast: number;
  actual: number;
  index: string;
};

export type IntensityItem = {
  from: string;
  to: string;
  intensity: IntensityData;
};
