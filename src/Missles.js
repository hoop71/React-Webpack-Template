import React, { Fragment } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      count: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.shootLaser = this.shootLaser.bind(this);
    this.clearLasers = this.clearLasers.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  clearLasers() {
    this.setState({ count: 0 });
  }

  shootLaser() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const showFire = this.state.isToggleOn ? (
      <div>
        <button onClick={this.shootLaser}>Shoot a Laser</button>
        <button onClick={this.clearLasers}>Unfire all missles</button>
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    ) : (
      <Fragment>
        <h4>Turn on to fire missles</h4>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </Fragment>
    );
    return (
      <Fragment>
        <h4>Missles Fired: {this.state.count}</h4>
        {showFire}
      </Fragment>
    );
  }
}

export default Counter;
