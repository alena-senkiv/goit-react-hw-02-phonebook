import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
    // if (this.state.contacts.find(name => this.state.name)) {
    //   alert(`${this.state.name} is already in contacts`);
    //   return;
    // }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactName,
      ),
    }));
    console.log('удалить');
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

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
        <label>
          Find contacts by name
          <br />
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <ul>
          {visibleContacts.map(({ name, number }) => (
            <li key={uuidv4()}>
              {name} : {number}
              <button type="button" onClick={() => this.deleteContact(name)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
