import './MobileCart.scss';
import image1 from "../../../assets/images/punkin_pumpkin_bath_bomb_2023_724062ec_thumbnail_256.png";
import image2 from "../../../assets/images/lord_of_misrule_bath_bomb_ecom_2023_3accf742_thumbnail_256.png";
import image3 from "../../../assets/images/ghostie.avif";
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
                <MobileProductInCart name="PUMKIN PUMPKIN" category="BATH BOMB" price="$8.00" imgSrc={image1}/>
                <MobileProductInCart  name="ALIEN" category="BUBBLE BAR" price="$10.00" imgSrc={image2}/>     
                <MobileProductInCart name="LORD OF MISRULE" category="BATH BOMB"price="$9.50" imgSrc={image3}/>
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
