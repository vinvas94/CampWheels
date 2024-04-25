import styled from 'styled-components';

export const List = styled('ul')`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 44px;
`;
export const Item = styled('li')`
  background-color: var(--background-icon-color);
  padding: 12px 18px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: var(--text-color);
  display: flex;
  gap: 8px;
`;
