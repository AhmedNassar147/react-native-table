import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import LoaderView from "./components/Loader";
import Table from "./components/Table";
import TableBody from "./components/Table/TableBody";
import TableRow from "./components/Table/TableRow";
import TableCell from "./components/Table/TableCell";
import Pagination from "./components/Pagination";
import { isThereData, renderRowValues } from "./utils";

const TableViewData = ({ columns, dataSource, showPagination = true }) => {
  const isColumnsPresent = isThereData(columns);
  const isDataPresent = isThereData(dataSource);

  return (
    <Fragment>
      <Table containerViewStyle={mainStyles}>
        {TableRow({
          useAsHeader: true,
          children:
            isColumnsPresent &&
            columns.map(({ title }, idx) => (
              <TableCell key={idx} useAsHeaderCell children={title} />
            ))
        })}

        <TableBody>
          {LoaderView({
            isLoading: !isDataPresent,
            children:
              isDataPresent &&
              dataSource.map((rowValues, rowIndex) => (
                <TableRow key={rowIndex}>
                  {isColumnsPresent &&
                    columns.map((colItem, colIndex) => (
                      <TableCell
                        key={colIndex}
                        children={renderRowValues({
                          ...colItem,
                          rowIndex,
                          colIndex,
                          rowValues
                        })}
                      />
                    ))}
                </TableRow>
              ))
          })}
        </TableBody>
      </Table>

      {showPagination &&
        isDataPresent &&
        Pagination({
          initialPage: 0,
          onChange: page => page,
          pagesCount: 70
        })}
    </Fragment>
  );
};

const { mainStyles } = StyleSheet.create({
  mainStyles: {
    marginTop: 25,
    marginBottom: 5,
    maxHeight: "80%"
  }
});

export default TableViewData;
