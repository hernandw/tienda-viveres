import "./App.css";

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/router/AppRouter";
import { MyContext } from "./components/context/MyContext";

const urlApi = "https://fakestoreapi.com/products";

const App = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(urlApi);
    const data = await res.json();
    setDataProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MyContext.Provider value={ {dataProducts, setDataProducts}}>
        <NavBar />
        <AppRouter />
      </MyContext.Provider>
    </div>
  );
};

export default App;
