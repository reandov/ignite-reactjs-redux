import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CartPage } from "./pages/CartPage";
import { Home } from "./pages/Home";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
