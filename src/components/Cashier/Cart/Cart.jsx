import './Cart.scss';
import ProductInCart from "./ProductInCart";

import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";

function Cart() {
    return (
        <section className="cart">
            <div className="cart__header">
                <h2 className="cart__title">Cart</h2>
                <CartIcon />
            </div>

            <div className="cart__products">
                <ProductInCart />
            </div>
        </section>
    )
}

export default Cart;