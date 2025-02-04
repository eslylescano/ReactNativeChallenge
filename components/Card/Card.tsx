import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { IntensityItem } from "../../types/types";
import { format } from "date-fns";

type CardProps = {
  data: IntensityItem;
};

const intensityColors: { [key: string]: string } = {
  verylow: "#4CAF50",
  low: "#8BC34A",
  moderate: "#FFC107",
  high: "#FF5722",
  veryhigh: "#D32F2F",
};

export const Card = ({ data }: CardProps) => {
  const formattedFrom = format(new Date(data.from), "HH:mm");
  const formattedTo = format(new Date(data.to), "HH:mm");
  const intensityColor = intensityColors[data.intensity.index];
  return (
    <View style={styles.container} testID="CardContainer">
      <Text style={styles.timeRange}>
        {formattedFrom} - {formattedTo}
      </Text>

      <View style={styles.row}>
        <View style={styles.item}>
          <Feather name="trending-up" size={40} color={"#00A6FF"} />
          <Text style={styles.valueText}>{data.intensity.forecast}</Text>
        </View>
        <View style={styles.item}>
          <Feather name="eye" size={40} color={"#4CAF50"} />
          <Text style={styles.valueText}>{data.intensity.actual}</Text>
        </View>
        <View style={styles.item}>
          <Feather name="bar-chart-2" size={40} color={intensityColor} />
          <Text style={styles.valueText}>{data.intensity.index}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "moccasin",
    height: 150,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  timeRange: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  item: {
    alignItems: "center",
  },
  valueText: {
    fontSize: 16,
  },
});
