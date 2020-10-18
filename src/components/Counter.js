import React from "react";
import countapi from "countapi-js";

export default class Counter extends React.Component {
  state = {
    isLoading: true,
    count: 0
  }

  async componentDidMount() {
    countapi.event().then((result) => {
      console.log(result)
    });
  }

  render() {
    return (
      <div>
        <p>This page has been viewed</p>
        <h1>X</h1>
        <p>times</p>
      </div>
    )
  }
}