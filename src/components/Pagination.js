import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import PageItem from "./TouchableView";

const Pagination = ({ initialPage, onChange, pagesCount, uperBound = 12 }) => {
  let pages = [];
  for (let p = 0; p < pagesCount; p++) {
    pages = [...pages, p];
  }

  const handlePrevChange = () => {
    return (
      onChange && onChange(initialPage === 0 ? initialPage : initialPage - 1)
    );
  };

  const handleNextChange = () => {
    return (
      onChange &&
      onChange(initialPage + 1 === pagesCount ? initialPage : initialPage + 1)
    );
  };

  const handlePressPage = pageNumber => () => {
    return onChange && onChange(pageNumber);
  };

  return (
    <View style={[rowStyles, conatinerStyle]}>
      <View style={paginationWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PageItem({
            onPress: handlePrevChange,
            contianerStyles: [rowStyles, circleStyle, iconCircleStyle],
            textStyle: [
              valueStyle,
              iconTextStyle,
              { color: initialPage !== 0 ? "#bbdefb" : "#e0e0e0" }
            ],
            children: "<"
          })}

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[rowStyles, pagesNumbersContainer]}>
              {pages.map(
                pageNumber =>
                  (pageNumber <= uperBound || pageNumber === initialPage) && (
                    <PageItem
                      key={pageNumber}
                      contianerStyles={[
                        rowStyles,
                        circleStyle,
                        pageNumber === initialPage ? currentPageStyle : null
                      ]}
                      textStyle={valueStyle}
                      onPress={handlePressPage(pageNumber)}
                      children={pageNumber + 1}
                    />
                  )
              )}
              {pagesCount > uperBound &&
                pagesCount > initialPage + 1 &&
                PageItem({
                  contianerStyles: [rowStyles, circleStyle],
                  textStyle: valueStyle,
                  children: "..."
                })}
            </View>
          </ScrollView>

          {PageItem({
            onPress: handleNextChange,
            contianerStyles: [rowStyles, circleStyle, iconCircleStyle],
            textStyle: [
              valueStyle,
              iconTextStyle,
              { color: initialPage !== pagesCount ? "#bbdefb" : "#e0e0e0" }
            ],
            children: ">"
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const {
  rowStyles,
  conatinerStyle,
  circleStyle,
  currentPageStyle,
  paginationWrapper,
  valueStyle,
  pagesNumbersContainer,
  iconCircleStyle,
  iconTextStyle
} = StyleSheet.create({
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

export default Pagination;
