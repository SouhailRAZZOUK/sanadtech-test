import * as React from "react";
import {Action} from "redux";

export interface FilterProps { filterBy: String, query: String, delete: any }

export class Filter extends React.Component<FilterProps, {}> {

  public state: any;

  constructor(props, context) {
    super(props, context);
    console.log(props, this.refs);
    this.state = {
      filterBy: this.props.filterBy,
      query: this.props.query
    };
    this.deleteFilter = this.deleteFilter.bind(this);
  }

  deleteFilter() {
    this.props.delete(this.props.filterBy);
  }
  render() {
    return <li className="filter">
      <span className="filter__filter-by">Filter By: "{this.state.filterBy}"</span>
      <span className="filter__query">Query: "{this.state.query}"</span>
      <span className="filter__delete-btn" onClick={this.deleteFilter} />
    </li>
  }
}