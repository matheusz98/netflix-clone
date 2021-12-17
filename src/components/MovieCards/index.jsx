import { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import {
  MovieCardsSection,
  MovieTitle,
  MovieItemsLeft,
  MovieItemsRight,
  MoviesList,
  MoviesContent,
  MovieCard,
  MoviePoster,
} from "./style";

const MovieCards = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    const x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    const x = scrollX - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <MovieCardsSection>
      <MovieTitle>{title}</MovieTitle>
      <MovieItemsLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </MovieItemsLeft>
      <MovieItemsRight onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </MovieItemsRight>
      <MoviesList>
        <MoviesContent
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <MovieCard key={index}>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.original_title}
                />
              </MovieCard>
            ))}
        </MoviesContent>
      </MoviesList>
    </MovieCardsSection>
  );
};

export default MovieCards;
