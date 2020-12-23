import React, { Component } from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello Django-React SO IT IS WOEKing
        </Button>
      </div>
    );
  }
}
const appDiv = document.getElementById("app");

render(<App />, appDiv);
