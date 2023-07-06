import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Error from "./Error";
import Header from "./components/Header";
import Footer from "./components/footer";
import { AppProvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  );
};

export default App;
