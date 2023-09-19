import './MobileCart.scss';

import MobileProductInCart from './MobileProductInCart';
import PaymentButton from '../../../components/PaymentButton/PaymentButton';
import {ReactComponent as ApplePayIcon} from "../../../assets/icons/apple-pay-logo-svgrepo-com.svg";
import { useNavigate } from 'react-router-dom';

function MobileCart() {
    const navigate = useNavigate()

const handleNavigate = () =>{
    console.log("go to next page");
    navigate('/customer/cart/payment');

}

    return (
        <section className="mobile-cart">
            <div className="mobile-cart__header">
                <h4 className="mobile-cart__title">Cart Items</h4>
            </div>

            <div className="mobile-cart__products">
                <MobileProductInCart />
                <MobileProductInCart />     
                <MobileProductInCart />
            </div>
            <div className="mobile-cart__summary">
                <h3 className="mobile-cart__summary-title">Summary</h3>
                <div className="mobile-cart__summary-info">
    <div className="mobile-cart__summary-info-detail">
        <p className="mobile-cart__summary-info-name">Subtotal</p>
        <p className="mobile-cart__summary-info-cost">$36.00</p>
    </div>
    <div className="mobile-cart__summary-info-detail">
        <p className="mobile-cart__summary-info-name">GST (5%)</p>
        <p className="mobile-cart__summary-info-cost">$0.00</p>
    </div>
    <div className="mobile-cart__summary-info-detail">
        <p className="mobile-cart__summary-info-name">PST (7%)</p>
        <p className="mobile-cart__summary-info-cost">$0.00</p>
    </div>
    <div className="mobile-cart__summary-info-detail mobile-cart__summary-info-total">
        <span className="mobile-cart__summary-info-name">Total</span>
        <p className="mobile-cart__summary-info-cost">$0.00</p>
    </div>
</div>
                <div className="mobile-cart__summary-info mobile-cart__summary-info-payment">
                    <p className="mobile-cart__summary-info-name">How Will you Be Paying?</p>
                </div>
                <div className="mobile-cart__summary-info-buttons">
                    
                <PaymentButton label="Credit Card" onClick={handleNavigate}/>
                <PaymentButton logoSrc={<ApplePayIcon/>} />
                </div>
            </div>
        </section>
    )
}

export default MobileCart;
