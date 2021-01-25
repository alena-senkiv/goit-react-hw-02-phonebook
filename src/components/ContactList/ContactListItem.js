import React from 'react';
import { ImBin } from 'react-icons/im';
import s from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.contactListItem}>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        <ImBin style={{ marginRight: 5 }} />
        Delete
      </button>
    </li>
  );
}
