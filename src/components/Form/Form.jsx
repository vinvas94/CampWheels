import moment from 'moment';
import Notiflix from 'notiflix';
import { useState } from 'react';
import sprite from '../../assets/svg/iconsSprite.svg';
import ReactDatePicker from 'react-datepicker';

export const Form = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'comment') setComment(e.target.value);
  };
  const formValidation = data => {
    let error = false;
    if (!data.name.trim()) {
      error = true;
      const notiflix = () => {
        return Notiflix.Notify.failure('Name is required');
      };
      notiflix();
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      error = true;
      const notiflix = () => {
        return Notiflix.Notify.failure('Need is correct Email');
      };
      notiflix();
    }
    if (!moment(data.date, 'MM/DD/YYYY', true).isValid()) {
      error = true;
      const notiflix = () => {
        return Notiflix.Notify.failure('Need is correct data');
      };
      notiflix();
    }
    return error;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { date, email, comment, name };
    if (!formValidation(data)) {
      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form__container">
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
        <input
          className="form__input"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Name"
        />
        <input
          className="form__input"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
        />
        <div>
          <svg className="calendarIcon" width={20} height={20}>
            <use href={`${sprite}#icon-calendario`} />
          </svg>
          <ReactDatePicker
            useWeekdaysShort={true}
            required
            calendarStartDay={1}
            name="date"
            selected={date}
            onChange={date => setDate(date)}
            placeholderText="Booking date"
          />
        </div>
        <input
          className="form__textarea"
          name="comment"
          value={comment}
          as="textarea"
          onChange={handleChange}
          placeholder="Comment"
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
