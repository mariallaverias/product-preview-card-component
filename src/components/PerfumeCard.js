import React from "react";
import "../App.css";
import AddToCartButton from "./AddToCartButton";
import Pricetag from "./Pricetag";

function PerfumeCard({ product, isDesktop }) {
  return (
    <div className="container">
      {product &&
        product.map((prod) => (
          <div className="perfumeCard" key={prod.id}>
            <div className="prodImage">
              <img
                src={
                  isDesktop
                    ? process.env.PUBLIC_URL + prod.imageDesktop
                    : process.env.PUBLIC_URL + prod.imageMobile
                }
                alt={prod.name}
                key={prod.id}
              />
            </div>
            <div className="prodDescription">
              <h3>{prod.type}</h3>
              <h1>{prod.name}</h1>
              <p>{prod.description}</p>
              <div className="priceTag">
                <Pricetag
                  price={prod.price}
                  discount={prod.discount}
                  dPrice={prod.dPrice}
                ></Pricetag>
              </div>
              <div className="button">
                <AddToCartButton> </AddToCartButton>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PerfumeCard;
