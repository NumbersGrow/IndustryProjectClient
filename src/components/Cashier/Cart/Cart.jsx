import './Cart.scss';
import ProductInCart from "./ProductInCart";
import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

function Cart({isHidden}) {
    return (
        <section className="cart">
            <div className="cart__header">
                <h2 className="cart__title">Cart</h2>
                <CartIcon className="cart__cart-icon" />
            </div>

            <div className="cart__products">
                <ProductInCart name="Pumpkin Pumpkin" price="8.00" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/punkin_pumpkin_bath_bomb_2023_724062ec_thumbnail_256.png" />
                <ProductInCart name="Alien" price="10.00" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/alien_bubble_bar_ecom_2023_60a7fa37_thumbnail_256.png" />
                <ProductInCart name="Lord of Misrule" price="10.00" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/lord_of_misrule_bath_bomb_ecom_2023_3accf742_thumbnail_256.png" />
            </div>
            <div className="cart__summary">
                <h3 className="cart__summary-title">Summary</h3>
                <div className="cart__summary-info">
                    <p className="cart__summary-info-name">Subtotal</p>
                    <p className="cart__summary-info-cost">$27.50</p>
                </div>
                <div className="cart__summary-info">
                    <p className="cart__summary-info-name">GST (5%)</p>
                    <p className="cart__summary-info-cost">$1.37</p>
                </div>
                <div className="cart__summary-info">
                    <p className="cart__summary-info-name">PST (7%)</p>
                    <p className="cart__summary-info-cost">$3.57</p>
                </div>
                <div className="cart__summary-info cart__summary-info-total">
                    <p className="cart__summary-info-name">Total</p>
                    <p className="cart__summary-info-cost">$32.44</p>
                </div>
            </div>
            <Link to="/cashier/cart" className={isHidden}><button className="cart__button">Next</button></Link>
        </section>
    )
}

export default Cart;