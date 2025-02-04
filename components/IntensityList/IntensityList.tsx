import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../Card/Card";
import { IntensityItem } from "../../types/types";

type ListProps = {
  data: IntensityItem[];
};

export const IntensityList = ({ data }: ListProps) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) =>
          `${item.from}-${item.to}-${item.intensity.index}`
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View>
            <Card data={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
  },
  separator: {
    height: 16,
  },
});
