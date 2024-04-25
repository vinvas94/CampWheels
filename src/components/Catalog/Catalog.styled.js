import styled from 'styled-components';

export const CatalogItem = styled.li`
  display: flex;
  gap: 24px;
  width: 888px;
  margin-bottom: 32px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
`;

export const TodoContainer = styled.div``;

export const CatalogImage = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
`;

export const CatalogTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CatalogTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const CatalogPriceContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CatalogPrice = styled.p`
  font-size: 24px;
`;

export const CatalogButtonFavorites = styled.button`
  background-color: transparent;
  border: none;
  &:hover svg {
    fill: var(--button-color);
    stroke: var(--button-color);
  }
`;

export const CatalogContainerReviewsLocation = styled.div`
  position: relative;
  display: flex;
  gap: 36px;
  padding-left: 20px;
  margin-bottom: 24px;
`;

export const CatalogReviews = styled.a`
  border-bottom: 1px solid #101828;
  padding-bottom: 1px;
`;

export const ReviewsIcon = styled.svg`
  position: absolute;
  top: 2px;
  left: 0;
`;

export const CatalogLocation = styled.span`
  position: relative;
  padding-left: 20px;
`;

export const LocationIcon = styled.svg`
  position: absolute;
  top: 2px;
  left: 0;
`;

export const CatalogDescription = styled.p`
  color: var(--text-comment-color);
  margin-bottom: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 525px;
`;

export const CategoriesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const CategoriesItem = styled.li`
  position: relative;
  padding: 12px 18px 12px 46px;
  border-radius: 100px;
  background-color: var(--background-icon-color);
`;

export const CategoriesIcon = styled.svg`
  position: absolute;
  top: 11px;
  left: 18px;
`;

export const CatalogButton = styled.button`
  background-color: var(--button-color);
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  color: var(--background-color);
  &:hover {
    background-color: #d84343;
  }
`;

export const ButtonLoadMore = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 19px 40px;
  background-color: transparent;
  margin: 0 auto;
  display: block;
  &:hover {
    border: 1px solid var(--button-color);
  }
`;
