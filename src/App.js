import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  // handleChangeName = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  // handleChangeNumber = e => this.setState({ number: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state.name, this.state.number);
    this.reset();
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              id={this.nameInputId}
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="text"
              name="number"
              id={this.numberInputId}
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, number }) => (
            <li key={uuidv4()}>
              {name} : {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
