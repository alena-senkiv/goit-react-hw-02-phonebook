import s from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.contactListItem}>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
