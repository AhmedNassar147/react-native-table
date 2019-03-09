import React from "react";
import { View, StyleSheet } from "react-native";

const TableBody = ({ viewContainerStyle, children }) => (
  <View style={[containerStyles, viewContainerStyle]}>{children}</View>
);

const { containerStyles } = StyleSheet.create({
  containerStyles: {
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    minHeight: "20%",
    backgroundColor: "transparent",
    marginVertical: 5
  }
});

export default TableBody;
