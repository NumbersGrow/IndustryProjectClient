import './ProductInCart.scss';

function ProductInCart({ image, name, price }) {
    return (
        <section className="cart-product">
            <img className="cart-product__pic" src={image} alt="placeholder image" />
            <div className="cart-product__info">
                <h3 className="cart-product__name">{name}</h3>
                <p className="cart-product__category">Bath Bomb</p>
                <div className="cart-product__counter">
                    <div className="cart-product__counter-reduce">-</div>
                    <div className="cart-product__counter-quantity">1</div>
                    <div className="cart-product__counter-increase">+</div>
                </div>
            </div>
            <div className="cart-product__cost">${price}</div>
        </section>
    )
}

export default ProductInCart;