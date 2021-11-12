import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "../components/Cart";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

export function CartPage() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  const total = cart.reduce((sumTotal, item) => {
    return (sumTotal += item.product.price * item.quantity);
  }, 0);

  return (
    <div style={{ maxWidth: "1180px", margin: "auto", marginTop: "2rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>Your products</h1>
      <Cart cart={cart} />
      <h3>
        Total:{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)}
      </h3>
    </div>
  );
}
