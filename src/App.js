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
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const AddToCart = (product) => {
    setCurrentSale([...currentSale, product]);
  };

  function handleClick(productId) {
    const filtered = currentSale.filter((element) => element !== productId);
    setCurrentSale(filtered);
  }

  const showProducts = (word) => {
    setFilteredProducts(
      products.filter(
        (item) =>
          item.category.toLowerCase() === word.toLowerCase() ||
          item.name.toLowerCase() === word.toLowerCase()
      )
    );
  };

  return (
    <div>
      <div>
        <Header showProducts={showProducts} />
        <div className="container-pc">
          <ProductsList
            prop={filteredProducts.length === 0 ? products : filteredProducts}
            AddToCart={AddToCart}
          />
          <div className="container-productslist">
            <Cart pro={currentSale} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
