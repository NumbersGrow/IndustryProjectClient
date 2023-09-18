import './MobileProductInCart.scss';

function MobileProductInCart() {
    return (
        <section className="mobile-cart-product">
            <img className="mobile-cart-product__pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder image" />
            <div className="mobile-cart-product__info">
                <h3 className="mobile-cart-product__name">Product Name</h3>
                <p className="mobile-cart-product__category">Category</p>
                <div className="mobile-cart-product__counter">
                    <div className="mobile-cart-product__counter-reduce">-</div>
                    <div className="mobile-cart-product__counter-quantity">2</div>
                    <div className="mobile-cart-product__counter-increase">+</div>
                </div>
            </div>
            <div className="mobile-cart-product__cost">$12.00</div>
        </section>
    )
}

export default MobileProductInCart;