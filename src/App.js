import "./App.css";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Home } from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Error } from "./Components/Error404/Error404";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "./Context/CartContext";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import "./Components/NavBar/NavBar.css";

function App() {
  return (
    <>
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    </>
  );
}

export default App;
