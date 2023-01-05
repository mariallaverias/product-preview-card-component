import React from "react";
import "../App.css";
function Pricetag({ price, dPrice, discount }) {
  return (
    <div className="priceTags">
      <h1 className="price">${!discount ? price : dPrice}</h1>
      {discount ? <p className="discount">{price}</p> : null}
    </div>
  );
}

export default Pricetag;
