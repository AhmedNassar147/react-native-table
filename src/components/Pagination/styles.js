import { StyleSheet } from "react-native";

export default StyleSheet.create({
  rowStyles: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  conatinerStyle: {
    width: "100%",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    height: 32,
    maxHeight: 32
  },
  paginationWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  pagesNumbersContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    height: "100%",
    width: "100%"
  },
  circleStyle: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 14,
    minHeight: 11,
    maxWidth: 28,
    maxHeight: 22,
    marginRight: 5,
    backgroundColor: "#fff",
    borderRadius: 12.5
  },
  currentPageStyle: {
    backgroundColor: "#bbdefb"
  },
  valueStyle: {
    fontSize: 10,
    paddingVertical: 0
  },
  iconCircleStyle: {
    minHeight: 32,
    maxHeight: 32,
    minWidth: 32,
    maxWidth: 32,
    borderRadius: 15
  },
  iconTextStyle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
