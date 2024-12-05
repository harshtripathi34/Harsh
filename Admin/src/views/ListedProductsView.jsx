import React from "react";

import { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";

import ListeditemCard from "../components/ListeditemCard";

export const ListedProductsView = () => {
  const { listedProducts } = useContext(AdminContext);
console.log("listedproducts",listedProducts)
  return (
    <div className="py-6  px-2 sm:px-10 text-start flex flex-1 flex-col gap-4">
      {listedProducts.length > 0 ? (
        listedProducts.reverse().map((product) => {
          return <ListeditemCard item={product} />;
        })
      ) : (
        <p>No product yet listed</p>
      )}
    </div>
  );
};
