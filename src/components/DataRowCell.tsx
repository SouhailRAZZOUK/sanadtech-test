import * as React from "react";

export interface DataRowCellProps { chunk: String }

export class DataRowCell extends React.Component<DataRowCellProps, {}> {
  render() {
    return <td>{this.props.chunk}</td>;
  }
}