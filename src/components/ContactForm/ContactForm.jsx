import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              required
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}