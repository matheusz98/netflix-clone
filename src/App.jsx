import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import api from "./api";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCards from "./components/MovieCards";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const list = await api.getHomeList();
      setMovies(list);

      const originals = list.filter((movie) => movie.slug === "originals");
      const randomMovies = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const selectedMovie = originals[0].items.results[randomMovies];
      const movieInfo = await api.getMovieInfo(selectedMovie.id, "tv");
      setFeatureData(movieInfo);
    };
    loadData();
  }, []);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const Homepage = styled.section``;

  const MovieList = styled.section`
    margin-top: -150px;
  `;

  return (
    <>
      <GlobalStyles />
      <Homepage>
        <Header black={blackHeader} />
        {featureData && <Hero item={featureData} />}
        <MovieList>
          {movies.map((item, index) => (
            <MovieCards key={index} title={item.title} items={item.items} />
          ))}
        </MovieList>
      </Homepage>
    </>
  );
};

export default App;
