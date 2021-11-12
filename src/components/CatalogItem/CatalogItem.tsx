import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from "reactstrap";
import { IState } from "../../store";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";
import { HiPlusCircle } from "react-icons/hi";

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Card>
      <CardImg alt={product.title} src={product.image} />
      <CardBody>
        <CardTitle tag="h5">{product.title}</CardTitle>
        <CardSubtitle className="mb-5">
          {hasFailedStockCheck && <Badge color="danger">Out of stock!</Badge>}
        </CardSubtitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            position: "absolute",
            right: "0.4rem",
            bottom: "0.4rem",
          }}
        >
          <Badge color="success">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </Badge>
          <Button
            onClick={handleAddProductToCart}
            disabled={hasFailedStockCheck}
            color={hasFailedStockCheck ? "secondary" : "primary"}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <HiPlusCircle />
            <span>Add to Cart</span>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
