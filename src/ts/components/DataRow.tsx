import * as React from "react";
import { DataRowCell } from "./DataRowCell";

export interface DataRowProps { item: any }

export class DataRow extends React.Component<DataRowProps, {}> {
  renderDataRowCell(chunk: String, index:any) {
    return (
      <DataRowCell chunk={chunk} key={index}/>
    )
  }
  render() {
    let dataRowCells = [];
    let data = this.props.item;
    let i = 0;
    for (let chunk in data) {
      dataRowCells.push(this.renderDataRowCell(data[chunk], i));
      i++;
    }
    return <tr>
      {dataRowCells}
    </tr>
  }
}