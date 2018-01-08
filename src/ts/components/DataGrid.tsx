import * as React from "react";
import { DataGridBody } from "./DataGridBody";
import { DataGridHead } from "./DataGridHead";

export interface DataGridProps { data: any, headersMap: any }

// 'DataGridProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class DataGrid extends React.Component<DataGridProps, {}> {
  render() {
    return <table>
      <DataGridHead headers={this.props.headersMap} />
      <DataGridBody data={this.props.data} />
    </table>;
  }
}