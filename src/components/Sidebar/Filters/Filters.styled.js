import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 360px;
  .location {
    gap: 8px;
    color: rgba(16, 24, 40, 0.6);
  }
  .text-first {
    margin-top: 14px;
  }
  .input-location-container {
    position: relative;
  }
  .input-location {
    padding-left: 44px;
  }
  .input-location:focus + .input-location-icon {
    stroke: #101828;
  }
  .input-location-icon {
    position: absolute;
    top: 18px;
    left: 18px;
    stroke: rgba(16, 24, 40, 0.6);
  }
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text);
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  width: 316px;
  height: 56px;
  background-color: var(--background-color);
`;
export const Text = styled.p`
  font-size: 20px;
  color: var(--text-color);
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;
export const ContainerCheckBox = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  .checkbox-label {
    position: relative;
    cursor: pointer;
    width: 110px;
    height: 93px;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
  }
  .checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox-label:has(.checkbox-input:checked) {
    border: 1px solid var(--button-color);
  }
  .checkmark {
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .checkmark-text {
    color: #101828;
    text-align: center;
  }
`;
export const ContainerRadio = styled.div`
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .radio-label {
    position: relative;
    cursor: pointer;
    width: 110px;
    height: 93px;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
  }
  .radio-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .radio-label:has(.radio-input:checked) {
    border: 1px solid var(--button-color);
  }
  .radiomark {
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .radiomark-text {
    color: #101828;
    text-align: center;
  }
`;
export const Button = styled.button`
  margin-top: 32px;
  background-color: var(--button-color);
  border: none;
  cursor: pointer;
  padding: 16px 60px;
  max-width: 173px;
  border-radius: 200px;
  color: #fff;
  &:hover {
    background: #d84343;
  }
`;
