import React, { Component } from "react";
import { DropdownList } from "react-widgets";
import "react-widgets/dist/css/react-widgets.css";

let colors = ["Diagonal Size", "Active area", "Interface", "Blacklight"];

class Ddlist extends Component {
  constructor(...args) {
    super(...args);
    this.state = { value: "Diagonal Size" };
  }
  render() {
    return (
      <div style={{ padding: 3 }}>
        <DropdownList
          data={colors}
          value={this.state.value}
          onChange={(value) => this.setState({ value })}
        />
      </div>
    );
  }
}

export default Ddlist;
