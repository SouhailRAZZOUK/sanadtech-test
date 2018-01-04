import * as React from "react";
import { DataRowCell } from "./DataRowCell";

export interface DataRowProps { item: any }

export class DataRow extends React.Component<DataRowProps, {}> {
  renderDataRowCell(chunk: String) {
    return (
      <DataRowCell chunk={chunk} />
    )
  }
  render() {
    let dataRowCells = [];
    let data = this.props.item;
    for (let chunk in data) {
      dataRowCells.push(this.renderDataRowCell(data[chunk]));
    }
    return <tr>
      {dataRowCells}
    </tr>
  }
}