import "./ShopButton.scss";

import chevron from "../../../assets/icons/chevron-right.svg";

function ShopButton() {
  return (
    <button className="shop-button">
      SHOP HERE
      <img className="shop-button__img" src={chevron} alt="chevron-right" />
    </button>
  );
}

export default ShopButton;
