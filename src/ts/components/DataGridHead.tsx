import * as React from "react";

export interface DataGridHeadProps { headers: any }

// 'DataGridHeaderProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class DataGridHead extends React.Component<DataGridHeadProps, {}> {
  renderDataGridHeaderCell(property: any, index: any) {
    return (
      <th key={index}>{property}</th>
    );
  }
  render() {
    let headers = [];
    let data = this.props.headers
    let i = 0;
    for (let header in data) {
      headers.push(this.renderDataGridHeaderCell(data[header], i));
      i++;
    }
    return <thead>
      <tr>
        {headers}
      </tr>
    </thead>;
  }
}