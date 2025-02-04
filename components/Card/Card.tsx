import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather"

export const Card = () => {
  return (
    <View style={styles.container} testID="CardContainer">
      <Text style={styles.timeRange}>14:00 - 14:30</Text>

      <View style={styles.row}>
        <View style={styles.item}>
            <Feather name="trending-up" size={40} color={"#00BFFF"}/>
            <Text style={styles.valueText}>100</Text>
        </View>
        <View style={styles.item}>
        <Feather name="eye" size={40} color={"#00BFFF"}/>
            <Text style={styles.valueText}>90</Text>
        </View>
        <View style={styles.item}>
        <Feather name="bar-chart-2" size={40} color={"#00BFFF"}/>
            <Text style={styles.valueText}>Very Low</Text>
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
    padding:16,
    alignItems: "center"
  },
  timeRange:{
    fontSize:18,
    fontWeight:"bold",
    color:"#000",
    marginBottom:15
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:"100%",
  },
  item:{
    alignItems:"center",
  },
  valueText:{
    fontSize:16,
  }
});
