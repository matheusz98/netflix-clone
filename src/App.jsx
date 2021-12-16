import { useEffect } from "react";

import GlobalStyles from "./GlobalStyles";
import api from "./api";

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);

  return (
    <>
      <GlobalStyles />
      <h1>Hello World!</h1>
    </>
  );
};

export default App;
