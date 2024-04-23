import styled from 'styled-components';

export const TitleLocation = styled.h3`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
`;
export const ContainerInputLocation = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  max-width: 360px;
  border-radius: 10px;
  background: var(--background-color);
`;

export const InputLocation = styled.input`
  color: var(--text-color);
  font-size: 16px;
  font-style: normal;
  line-height: 1.25;
  background: var(--background-color);
  border: none;
`;

export const LocationIcon = styled.svg`
  width: 18px;
  height: 20px;
  stroke: var(--text-color);
  fill: transparent;
`;
