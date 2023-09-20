import './ProductCard.scss';

function ProductCard( {image, name, price, qty} ) {
    return (
        <section className="product">
            <img className="product__pic" src={image} alt="placeholder image" />
            <h3 className="product__name">{name}</h3>
            <p className="product__description">Sugar plum dragée dessert lollipop biscuit cookie. Oat cake croissant lemon drops soufflé chupa chups liquorice.</p>
            <div className="product__container">
                <div className="product__counter">
                    <div className="product__counter-reduce">-</div>
                    <div className="product__counter-quantity">{qty}</div>
                    <div className="product__counter-increase">+</div>
                </div>
                <p className="product__price">
                    ${price}
                </p>
            </div>
        </section>
    )
}

export default ProductCard;