import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };
  }

  setTime = () => {
    this.setState({ time: new Date() });
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
