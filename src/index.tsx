import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataGrid } from "./components/DataGrid";
import Axios from "axios";

let headersMap = { firstName: "First Name", lastName: "Last Name", coutry: "Country", email: "Email" };

let App = React.createClass({

  getInitialState: function (): any {
    return {
      users: []
    }
  },

  componentDidMount: function () {
    var _this = this;
    this.serverRequest = Axios
      .get("http://sanadtech-lab.appspot.com/")
      .then(function (result: any) {
        console.log(result)
        _this.setState({
          users: result.data
        });
      })
  },

  componentWillUnmount: function () {
    this.serverRequest.abort();
  },

  render: function () {
    return (
      <div>
        <DataGrid data={this.state.users} headersMap={headersMap} />
      </div>
    )
  }

});

ReactDOM.render(
  <App />,
  document.getElementById("app-root")
);