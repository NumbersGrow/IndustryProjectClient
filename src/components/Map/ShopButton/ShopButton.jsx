import "./ShopButton.scss";

import chevron from "../../../assets/icons/chevron-right.svg";

function ShopButton() {
  return (
    <div className="shop-button__wrapper" >
    <button className="shop-button">
      SHOP HERE
      <img className="shop-button__img" src={chevron} alt="chevron-right" />
    </button>
    </div>
  );
}

export default ShopButton;
