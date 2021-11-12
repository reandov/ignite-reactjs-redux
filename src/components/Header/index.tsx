import React from "react";

import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { Link } from "react-router-dom";

export function Header() {
  const totalAmount = useSelector<IState, number>((state) => {
    return state.cart.items.length;
  });

  return (
    <Navbar color="dark" dark>
      <Link to="/">
        <NavbarBrand>ReduxStore</NavbarBrand>
      </Link>
      <NavbarText>
        <Link to="/cart">
          <div style={{ marginRight: "1rem" }}>
            <HiShoppingCart size="24" color="#31C110" />
            <span
              style={{
                marginLeft: "0.8rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {totalAmount}
            </span>
          </div>
        </Link>
      </NavbarText>
    </Navbar>
  );
}
