import React, { Component } from 'react';
import './App.css';
import FetchUser from "./components/FetchUser";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}


export default App;
