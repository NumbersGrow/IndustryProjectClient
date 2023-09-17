import './ProductInCart.scss';

function ProductInCart() {
    return (
        <section className="cart-product">
            <img className="cart-product__pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder image" />
            <div className="cart-product__info">
                <h3 className="cart-product__name">cart-product Name</h3>
                <p className="cart-product__category">Category</p>
                <div className="cart-product__counter">
                    <div className="cart-product__counter-reduce">-</div>
                    <div className="cart-product__counter-quantity">0</div>
                    <div className="cart-product__counter-increase">+</div>
                </div>
            </div>
            <div className="cart-product__cost">$12.00</div>
        </section>
    )
}

export default ProductInCart;