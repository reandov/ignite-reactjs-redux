import React, { useEffect, useState } from "react";
import { CardGroup } from "reactstrap";
import { api } from "../../services/api";
import { IProduct } from "../../store/modules/cart/types";
import { CatalogItem } from "../CatalogItem/CatalogItem";

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <CardGroup>
        {catalog.map((product) => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </CardGroup>
    </main>
  );
}
