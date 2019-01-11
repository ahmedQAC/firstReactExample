import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Components from './component.js';
import AddingState from './State.js';
import Header from './Header.js';
import Content from './Content.js';
import Form from './Form.js'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Components main="Welcome to my page" />
        <Components clicker="Clicker" />
        <AddingState /><br/> */}
        <Form />

      </div>


    );
  }
}

export default App;
