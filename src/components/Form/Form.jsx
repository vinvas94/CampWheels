import moment from 'moment';
import Notiflix from 'notiflix';
import { useState } from 'react';
import sprite from '../../assets/svg/iconsSprite.svg';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FormButton,
  FormCalendar,
  FormCalendarIcon,
  FormContainer,
  FormDescription,
  FormInput,
  FormTextarea,
  FormTitle,
} from './Form.styled';

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
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Book your campervan now</FormTitle>
        <FormDescription>
          Stay connected! We are always ready to help you.
        </FormDescription>
        <FormInput
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Name"
        />
        <FormInput
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
        />
        <FormCalendar>
          <FormCalendarIcon className="calendarIcon" width={20} height={20}>
            <use href={`${sprite}#icon-calendario`} />
          </FormCalendarIcon>
          <ReactDatePicker
            useWeekdaysShort={true}
            required
            calendarStartDay={1}
            name="date"
            selected={date}
            onChange={date => setDate(date)}
            placeholderText="Booking date"
          />
        </FormCalendar>
        <FormTextarea
          name="comment"
          value={comment}
          as="textarea"
          onChange={handleChange}
          placeholder="Comment"
        ></FormTextarea>
        <FormButton type="submit">Send</FormButton>
      </FormContainer>
    </>
  );
};
