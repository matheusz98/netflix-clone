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

  const Homepage = styled.section``;

  const MovieList = styled.section`
    margin-top: -150px;
  `;

  const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #0c0c0c;
  `;

  const LoadingImg = styled.img`
    width: 25%;

    @media (max-width: 768px) {
      width: 60%;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <Homepage>
        <Header />
        {featureData && <Hero item={featureData} />}
        <MovieList>
          {movies.map((item, index) => (
            <MovieCards key={index} title={item.title} items={item.items} />
          ))}
        </MovieList>
        {movies.length <= 0 && (
          <Loading>
            <LoadingImg
              src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
              alt="Carregando"
            />
          </Loading>
        )}
      </Homepage>
    </>
  );
};

export default App;
