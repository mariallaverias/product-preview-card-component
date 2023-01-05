import React from "react";
import "../App.css";
function AddToCartButton() {
  return (
    <div>
      <button>
        <img className="icon" src="../images/icon-cart.svg" alt="cart icon" />
        <h4>Add&nbsp;to&nbsp;Cart</h4>
      </button>
    </div>
  );
}

export default AddToCartButton;
