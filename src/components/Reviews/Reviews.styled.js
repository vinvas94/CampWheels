import styled from 'styled-components';

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;
export const Info = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const NameBlock = styled.span`
  background-color: var(--background-icon-color);
  border-radius: 60px;
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: var(--button-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ReviewsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ReviewsName = styled.p`
  font-size: 18px;
`;
export const ReviewsComment = styled.p`
  width: 430px;
  line-height: 150%;
  color: var(--text-color);
`;
