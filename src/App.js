import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";

import { fetchChuck, fetchChuckCategories } from "./redux/chuck-operations";
import Hero from "./components/Hero";
import ChuckSays from "./components/ChuckSays";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChuck());
    dispatch(fetchChuckCategories());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Hero />
      <ChuckSays />
    </div>
  );
}

export default App;
