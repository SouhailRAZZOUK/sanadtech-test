import * as React from "react";
import { DataRow } from "./DataRow";

export interface DataGridBodyProps { data: any }

// 'DataGridBodyProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class DataGridBody extends React.Component<DataGridBodyProps, {}> {
  renderDataGridRow(item: any, index: any) {
    return (
      <DataRow item={item} key={index} />
    );
  }
  render() {
    let items = [];
    let data = this.props.data;
    let i = 0;
    for (let item in data) {
      items.push(this.renderDataGridRow(data[item], i));
      i++;
    }
    return <tbody>
      {items}
    </tbody>;
  }
}