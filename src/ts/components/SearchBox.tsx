import * as React from "react";
import { Filter } from "./Filter";

export interface SearchBoxProps { filters?: Array<any> }

export class SearchBox extends React.Component<SearchBoxProps, {}> {
  public state: any;
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      filters: this.props.filters
    }
    this.addFilter = this.addFilter.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
  }
  renderFilter(filterBy: String, query: String, index: any) {
    return <Filter key={index} filterBy={filterBy} query={query} delete={this.deleteFilter} />

  }

  deleteFilter(filterBy) {
    let self = this;
    this.setState({
      filters: self.state.filters.filter((filter) => filter.filterBy !== filterBy)
    })
  }

  addFilter() {
    this.setState({
      filters: [...this.state.filters, { filterBy: "", query: "" }]
    });
  }
  render() {
    let self = this;
    let filtersElements = this.state.filters.map((filter, i) => {
      return self.renderFilter(filter.filterBy, filter.query, i)
    })
    return <div className="search-box">
      <ul className="search-box__filters">
        {filtersElements}
        <li className="search-box__filters__add-filter-btn" onClick={this.addFilter}></li>
      </ul>
    </div>
  }
}