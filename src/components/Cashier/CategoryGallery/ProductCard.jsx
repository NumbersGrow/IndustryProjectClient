import './ProductCard.scss';

function ProductCard() {
    return (
        <section className="product">
            <img className="product__pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder image" />
            <h3 className="product__name">Product Name</h3>
            <p className="product__description">Sugar plum dragée dessert lollipop biscuit cookie. Oat cake croissant lemon drops soufflé chupa chups liquorice.</p>
            <div className="product__counter">
                <div className="product__counter-reduce">-</div>
                <div className="product__counter-quantity">0</div>
                <div className="product__counter-increase">+</div>
            </div>
        </section>
    )
}

export default ProductCard;