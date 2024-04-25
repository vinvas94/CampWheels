import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
`;
export const RatingSilverContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;
