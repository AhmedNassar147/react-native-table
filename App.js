import React, { Fragment } from "react";
import { columns, dataSource } from "./src/initials";
import TableView from "./src/index";
import Pagination from "./src/components/Pagination";

export default class App extends React.PureComponent {
  state = {
    currentPage: 0
  };

  handlePageChanged = page => {
    return this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <Fragment>
        {TableView({
          columns,
          dataSource: dataSource.filter((ds, idx) => idx === currentPage)[0]
        })}

        {Pagination({
          initialPage: currentPage,
          onChange: this.handlePageChanged,
          pagesCount: dataSource.length
        })}
      </Fragment>
    );
  }
}
