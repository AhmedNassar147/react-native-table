import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import PageItem from "../TouchableView";

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
} = styles;

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

export default Pagination;
