import React from "react";

const ProductCard = ({ imgUrl, title, price }) => {
  return (
    <>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </>
  );
};

export default ProductCard;
