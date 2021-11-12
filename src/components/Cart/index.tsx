import React from "react";
import { Table } from "reactstrap";
import { ICartItem } from "../../store/modules/cart/types";

import "./styles.css";

interface CartProps {
  cart: ICartItem[];
}

export function Cart({ cart }: CartProps) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>
              <img
                src={item.product.image}
                alt={item.product.title}
                style={{ width: "5rem" }}
              />
            </td>
            <td>{item.product.title}</td>
            <td>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.product.price)}
            </td>
            <td>{item.quantity}</td>
            <td>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.product.price * item.quantity)}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
