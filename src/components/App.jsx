import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


const App = () => {
 
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('')
  
   const handlerFormSubmits = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
     };
     
contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(name + ' is already in contacts')
      : setContacts(prevState => [newContact, ...prevState]);
  };
const changeFilter = event => {
    setFilter(event.target.value);
  };
const handlerDelete = idDelete => {
    const newContacts = contacts.filter(contact => contact.id !== idDelete);
    setContacts([...newContacts]);
  };
 
 useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
 }, [contacts]);
  


  const filterContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1 className="title">Phone book</h1>
      <ContactForm onSubmit={handlerFormSubmits} />
      {contacts.length ? <h2 className="title">Contacts</h2> : <></>}
      {contacts.length ? (
        <Filter value={filter} onChange={changeFilter} />
      ) : (
        <></>
      )}
      <ContactList contacts={filterContact} onDelete={handlerDelete} />
    </>
  );
};
export default App