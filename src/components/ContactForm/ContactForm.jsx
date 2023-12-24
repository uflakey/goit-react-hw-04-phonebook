import React, { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    return [setName(''), setNumber('')];
  };


    return (
      <>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              required
              value={number}
              onChange={handleChange}
            ></input>
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
