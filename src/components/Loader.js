import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <View style={containerStyle}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }
  return children || null;
};

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: "100%",
    alignSelf: "center"
  }
});

export default Loader;
