import { StyleSheet, View } from "react-native";
import TouchableText from "../TouchableView";
import { isTextChild } from "../../utils";

const TableCell = ({
  viewContainerStyle,
  children,
  onPress,
  useAsHeaderCell,
  fontSize,
  txtColor,
  width,
  disabled,
  actionCell,
  selected
}) => {
  const isToucableComponent = actionCell && !disabled;
  const textStyles = isTextChild(children)
    ? [
        textStyle,
        useAsHeaderCell ? headerTextStyle : null,
        fontSize ? { fontSize } : null,
        txtColor ? { color: txtColor } : null,
        disabled ? disabledColor : null
      ]
    : undefined;

  const contianerStyles = [
    containerViewStyles,
    width ? { width } : null,
    selected ? selectedStyle : null,
    viewContainerStyle
  ];

  return TouchableText({
    component: !isToucableComponent && View,
    contianerStyles,
    onPress,
    textStyle: textStyles,
    children
  });
};

const {
  containerViewStyles,
  textStyle,
  headerTextStyle,
  disabledColor,
  selectedStyle
} = StyleSheet.create({
  containerViewStyles: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 32,
    width: 75,
    marginRight: 8,
    paddingHorizontal: 1.5
  },
  textStyle: {
    fontSize: 9.25,
    fontWeight: "100",
    color: "#000"
  },
  headerTextStyle: {
    fontSize: 11,
    fontWeight: "300",
    color: "#000"
  },
  disabledColor: {
    color: "rgba(0, 0, 0, 0.26)"
  },
  selectedStyle: {
    backgroundColor: "#d8e0e9"
  }
});

export default TableCell;
