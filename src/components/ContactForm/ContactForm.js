import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImPencil } from 'react-icons/im';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.contactForm} onSubmit={this.handleSubmit}>
        <label className={s.contactLabel} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className={s.contactInput}
          type="text"
          name="name"
          id={this.nameInputId}
          value={name}
          onChange={this.handleChange}
          // required
        />

        <label className={s.contactLabel} htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          className={s.contactInput}
          type="text"
          name="number"
          id={this.numberInputId}
          value={number}
          onChange={this.handleChange}
          // required
        />

        <button className={s.buttonAdd} type="submit">
          <ImPencil style={{ marginRight: 5 }} />
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
