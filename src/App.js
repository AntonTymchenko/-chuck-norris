import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Header from "./components/Header";

import { fetchChuck, fetchChuckCategories } from "./redux/chuck-operations";
import Hero from "./components/Hero";
import ChuckSays from "./components/ChuckSays";
import "./App.css";

function App() {
  const categories = useSelector((state) => state.chuck.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChuck());
    dispatch(fetchChuckCategories());
  }, [dispatch]);
  return (
    <div className="App">
      {categories.length === 0 ? (
        <Loader
          className="loader"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <>
          <Header />
          <Hero />
          <ChuckSays />
        </>
      )}
    </div>
  );
}

export default App;
