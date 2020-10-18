import React from "react";
import countapi from "countapi-js";
import './Counter.css';

export default class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      count: 0
    };
    this.handleViews = this.handleViews.bind(this);
  }


  handleViews(e) {
    countapi.event().then((result) => {
      this.setState({isLoading: false, count: result.value})
    });
  }


  render() {
    return (
      <div>
        <p>This page has been viewed</p>
        <h1>{this.state.count}</h1>
        <p>times</p>
        <br />
        <button onClick={this.handleViews} className="fetch-button">Hit me up</button>
      </div>
    )
  }
}