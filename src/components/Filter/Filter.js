import s from './Filter.module.css';

export default function Filter({ value, onInputChange }) {
  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
}
