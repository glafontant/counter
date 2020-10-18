import React from "react";

export default class FetchUser extends React.Component {
  state = {
    isLoading: true,
    person: null
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return <div>loading...</div>;
  }
}