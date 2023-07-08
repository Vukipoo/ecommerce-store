import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
// import { CategoriesProvider } from "./contexts/Products";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";


import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <CategoriesProvider> */}
        <ProductsProvider>
          <CartProvider>
          <App />
          </CartProvider>
          </ProductsProvider>
        {/* </CategoriesProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
