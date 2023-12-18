import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  const newContact = contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.item}>
        <span className={css.itemName}>{name}:</span> {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul className={css.list}>{newContact}</ul>;
};

export default ContactList;