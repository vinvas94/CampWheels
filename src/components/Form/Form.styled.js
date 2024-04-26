import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 448px;
  height: 532px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const FormDescription = styled.p`
  margin-bottom: 24px;
  color: var(--text-comment-color);
`;

export const FormInput = styled.input`
  border-radius: 10px;
  width: 414px;
  height: 56px;
  border: none;
  margin-bottom: 14px;
  padding-left: 18px;
  background-color: var(--background-color);
`;

export const FormTextarea = styled.textarea`
  border-radius: 10px;
  width: 414px;
  margin-bottom: 24px;
  height: 114px;
  resize: none;
  padding: 9px;
  border: none;
  background-color: var(--background-color);
`;

export const FormCalendar = styled.div`
  position: relative;
`;

export const FormCalendarIcon = styled.svg`
  position: absolute;
  fill: #fff;
  stroke: #000;
  top: 18px;
  right: 26px;
  z-index: 25;
  pointer-events: none;
`;

export const FormButton = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  background-color: var(--button-color);
  border: none;
  color: #fff;
  &:hover {
    background-color: #d84343;
  }
`;
