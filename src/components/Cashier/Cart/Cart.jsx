import './Cart.scss';
import ProductInCart from "./ProductInCart";

import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";

function Cart({isHidden}) {
    return (
        <section className="cart">
            <div className="cart__header">
                <h2 className="cart__title">Cart</h2>
                <CartIcon />
            </div>

            <div className="cart__products">
                <ProductInCart />
                <ProductInCart />
                <ProductInCart />
            </div>
            <div className="cart__summary">
                <h3 className="cart__summary-title">Summary</h3>
                <div className="cart__summary-info">
                    <p className="cart__summary-info-name">Subtotal</p>
                    <p className="cart__summary-info-cost">$0.00</p>
                </div>
                <div className="cart__summary-info">
                    <p className="cart__summary-info-name">GST (5%)</p>
                    <p className="cart__summary-info-cost">$0.00</p>
                </div>
                <div className="cart__summary-info">
                    <p className="cart__summary-info-name">PST (7%)</p>
                    <p className="cart__summary-info-cost">$0.00</p>
                </div>
                <div className="cart__summary-info cart__summary-info-total">
                    <p className="cart__summary-info-name">Total</p>
                    <p className="cart__summary-info-cost">$0.00</p>
                </div>
            </div>
            <button className={`cart__button ${isHidden}`}>Next</button>
        </section>
    )
}

export default Cart;