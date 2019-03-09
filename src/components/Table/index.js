import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Table = ({
  children,
  containerViewStyle,
  contentWrapperStyle,
  npPadding,
  noShadow
}) => (
  <ScrollView
    style={[
      ViewContainer,
      npPadding ? noPaddingStyles : null,
      noShadow ? noShadowStyle : null,
      containerViewStyle
    ]}
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    <View style={[wrapperStyles, contentWrapperStyle]}>{children}</View>
  </ScrollView>
);

const {
  wrapperStyles,
  ViewContainer,
  noPaddingStyles,
  noShadowStyle
} = StyleSheet.create({
  ViewContainer: {
    minHeight: "20%",
    maxHeight: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#fff",
    borderRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1,
    paddingHorizontal: 2
  },
  wrapperStyles: {
    flex: 1,
    flexWrap: "wrap",
    height: "100%"
  },
  noPaddingStyles: {
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  noShadowStyle: {
    elevation: 0,
    borderWidth: 0
  }
});

export default Table;
