import * as React from "react";
import { DataGrid } from "./DataGrid";
import { SearchBox } from "./SearchBox";
import Axios from "axios";

export class App extends React.Component {
  public serverRequest: any;
  public state: any;

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      users: [],
      headersMap: {}
    }
  }

  componentDidMount() {
    var self = this;
    this.serverRequest = Axios
      .get("http://sanadtech-lab.appspot.com/")
      .then(function (result: any) {
        self.setState({
          users: result.data,
          headersMap: { firstName: "First Name", lastName: "Last Name", coutry: "Country", email: "Email" }
        });
      })
      .catch(() => {
        self.setState({
          users: [{ firstName: "Souhail", lastName: "RAZZOUK", coutry: "Morocco", email: "souhail@razzouk.com" }],
          headersMap: { firstName: "First Name", lastName: "Last Name", coutry: "Country", email: "Email" }
        });
      });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <main>
        <SearchBox />
        <DataGrid data={this.state.users} headersMap={this.state.headersMap} />
      </main>
    )
  }

};
