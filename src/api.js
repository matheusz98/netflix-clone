const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchData = async (endpoint) => {
  const req = await fetch(`${BASE_URL}${endpoint}`);
  const data = await req.json();
  return data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await fetchData(
          `/discover/tv?with_watch_providers=8&watch_region=BR&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await fetchData(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await fetchData(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await fetchData(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await fetchData(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await fetchData(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await fetchData(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await fetchData(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await fetchData(
            `/movie/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
          );
          break;
        case "tv":
          info = await fetchData(
            `/tv/${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
          );
          break;
        default:
          info = null;
      }
    }

    return info;
  },
};
