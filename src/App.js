import React, { Component } from 'react';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <div className={s.container}>Phonebook</div>;
  }
}

export default App;
