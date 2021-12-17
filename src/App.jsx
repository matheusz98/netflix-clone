import { useState, useEffect } from "react";

import GlobalStyles from "./GlobalStyles";
import api from "./api";
import Header from "./components/Header";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovies(list);
      // console.log(list);
    };
    loadAll();
  }, []);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <GlobalStyles />
      <Header black={blackHeader} />
    </>
  );
};

export default App;
