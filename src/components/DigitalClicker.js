import React from "react";

class DigitalClicker extends React.Component {
  constructor () {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    const count = this.state.timesClicked + 1;
    this.setState({timesClicked: count});
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
