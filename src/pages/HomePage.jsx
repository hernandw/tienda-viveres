import React, { useContext } from "react";
import { MyContext } from "../components/context/MyContext";
import ProductItem from "../components/ProductItem";

const HomePage = () => {
  const { dataProducts, setDataProducts } = useContext(MyContext);

  return (
    <div>
      <h1>Pagina de Productos</h1>

      <div className="container">
        <div className="row gap-5">
          {dataProducts.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
