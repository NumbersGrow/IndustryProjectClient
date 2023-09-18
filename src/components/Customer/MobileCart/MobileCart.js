import './MobileCart.scss';

import MobileProductInCart from './MobileProductInCart';


function MobileCart() {
    return (
        <section className="mobile-cart">
            <div className="mobile-cart__header">
                <h2 className="mobile-cart__title">Cart Items</h2>
            </div>

            <div className="mobile-cart__products">
                <MobileProductInCart />
                <MobileProductInCart />     
                <MobileProductInCart />
            </div>
            <div className="mobile-cart__summary">
                <h3 className="mobile-cart__summary-title">Summary</h3>
                <div className="mobile-cart__summary-info">
                    <p className="mobile-cart__summary-info-name">Subtotal</p>
                    <p className="mobile-cart__summary-info-cost">$0.00</p>
                </div>
                <div className="mobile-cart__summary-info">
                    <p className="mobile-cart__summary-info-name">GST (5%)</p>
                    <p className="mobile-cart__summary-info-cost">$0.00</p>
                </div>
                <div className="mobile-cart__summary-info">
                    <p className="mobile-cart__summary-info-name">PST (7%)</p>
                    <p className="mobile-cart__summary-info-cost">$0.00</p>
                </div>
                <div className="mobile-cart__summary-info mobile-cart__summary-info-total">
                    <p className="mobile-cart__summary-info-name">Total</p>
                    <p className="mobile-cart__summary-info-cost">$0.00</p>
                </div>
            </div>
        </section>
    )
}

export default MobileCart;
