import React, { Component } from 'react';
import './App.css';
import FetchUser from "./components/FetchUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchUser />
      </div>
    );
  }
}


export default App;
