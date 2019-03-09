import { StyleSheet, View } from "react-native";
import RowView from "../TouchableView";

const TableRow = ({
  viewContainerStyle,
  useAsHeader,
  selected,
  children,
  onPressRow,
  noborder
}) =>
  RowView({
    component: useAsHeader && View,
    children,
    onPress: onPressRow,
    contianerStyles: [
      containerStyles,
      useAsHeader ? headerStyle : null,
      selected ? selectedRow : null,
      noborder ? noBorderStyle : null,
      viewContainerStyle
    ]
  });

const {
  containerStyles,
  headerStyle,
  selectedRow,
  noBorderStyle
} = StyleSheet.create({
  containerStyles: {
    flex: 1,
    flexWrap: "wrap",
    maxWidth: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 35,
    maxHeight: 45,
    paddingHorizontal: 4,
    borderBottomColor: "rgba(224, 224, 224, 1)",
    borderBottomWidth: 0.65
  },
  headerStyle: {
    borderBottomWidth: 1,
    height: 32,
    width: "100%",
    maxHeight: 36
  },
  selectedRow: {
    backgroundColor: "#d8e0e9"
  },
  noBorderStyle: {
    borderBottomWidth: 0,
    borderColor: "transparent"
  }
});

export default TableRow;
