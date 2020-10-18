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
    this.setState({person: data.results[0], isLoading: false})
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large}/>
      </div>
    )
  }
}