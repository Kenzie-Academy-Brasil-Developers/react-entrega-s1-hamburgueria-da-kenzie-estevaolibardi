import "./App.css";
import { Logo } from "./components/Logo";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  console.log(currentSale);
  console.log(filteredProducts);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const AddToCart = (productId) => {
    const findProd = currentSale.find((elementId) => elementId === productId);
    // console.log(findProd);
    if (findProd === undefined) {
      setCurrentSale([...currentSale, productId]);
    }
  };

  const handleClick = (productId) => {
    // console.log(productId);
    const filtered = currentSale.filter(
      (item, element) => element !== productId
    );
    // console.log(filtered);
    setCurrentSale(filtered);
  };

  const removeAll = () => {
    setCurrentSale([]);
  };

  const showProducts = (search) => {
    setFilteredProducts(
      products.filter(
        (item) =>
          item.category.toLowerCase() === search.toLowerCase() ||
          item.name.toLowerCase() === search.toLowerCase()
      )
    );
  };

  return (
    <div>
      <div>
        <Header showProducts={showProducts} />
        <div className="container-pc">
          <ProductsList
            products={
              filteredProducts.length === 0 ? products : filteredProducts
            }
            addtoCart={AddToCart}
          />
          <div className="container-productslist">
            <Cart
              removeAll={removeAll}
              products={currentSale}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
