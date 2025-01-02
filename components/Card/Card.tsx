import React from "react";
import { StyleSheet, View } from "react-native";

type CardProps = {};
export const Card = ({ children }: React.PropsWithChildren<CardProps>) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "moccasin",
    height: 150,
    borderRadius: 8,
    alignItems: "center",
  },
});
