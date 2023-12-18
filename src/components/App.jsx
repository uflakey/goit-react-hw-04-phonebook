import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handlerFormSubmits = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(name + ' is already in contacts')
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  handlerDelete = idDelete => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== idDelete
    );
    this.setState(prevState => ({
      contacts: [...newContacts],
    }));
  };
componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  componentDidMount = () => {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  };
  render() {
    const filterToLowerCase = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
    return (
      <>
        <h1 className="title">Phone book</h1>
        <ContactForm onSubmit={this.handlerFormSubmits} />
        {this.state.contacts.length ? (
          <h2 className="title">Contacts</h2>
        ) : (
          <></>
        )}
        {this.state.contacts.length ? (
          <Filter value={this.state.filter} onChange={this.changeFilter} />
        ) : (
          <></>
        )}
        <ContactList contacts={filterContact} onDelete={this.handlerDelete} />
      </>
    );
  }
}