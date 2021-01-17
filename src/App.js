import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = uuidv4();

  handleChange = e => this.setState({ name: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state.name);
  };

  addContact = name => {
    const contact = {
      id: uuidv4(),
      name,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            <input
              type="text"
              name="name"
              id={this.nameInputId}
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Добавить контакт</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name }) => (
            <li key={uuidv4()}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
