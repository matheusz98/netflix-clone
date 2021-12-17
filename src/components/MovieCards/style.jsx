import styled from "styled-components";

export const MovieCardsSection = styled.section`
  margin-bottom: 30px;
`;

export const MovieTitle = styled.h3`
  margin: 0 0 0 30px;
`;

export const MovieItemsLeft = styled.div`
  width: 40px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 99;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const MovieItemsRight = styled.div`
  width: 40px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 99;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const MoviesList = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const MoviesContent = styled.div`
  transition: 0.3s ease-in-out;
`;

export const MovieCard = styled.div`
  width: 150px;
  display: inline-block;
  cursor: pointer;
`;

export const MoviePoster = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1);
  }
`;
