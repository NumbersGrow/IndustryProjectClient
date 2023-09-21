import "./StoreCard.scss";

import ShopButton from "../ShopButton/ShopButton";

function StoreCard({ title, address, className }) {
  return (
    <section className={className}>
      <div className="store-card__left">
        <p className="store-card__title">{title}</p>
        <p className="store-card__address">{address}</p>
      </div>
      <div className="store-card__right">
        <ShopButton />
      </div>
    </section>
  );
}

export default StoreCard;
