import './MobileProductInCart.scss';
import { React, useState } from 'react'
import mockData from '../../../assets/mockdata/mockdata';


function MobileProductInCart({ name, category, imgSrc, price }) {
    const [counter, setCounter] = useState(1);

    const increase = () =>{
        setCounter(count => count + 1);
    }; 
    const decrease = () => {
        setCounter(count => count - 1)
    };
    const updatePrice = () =>{
    };

    return (
        <section className="mobile-cart-product">
            <img className="mobile-cart-product__pic" src={imgSrc} alt="placeholder image" />
            <div className="mobile-cart-product__info">

            <div className="mobile-cart-product__info-top">
            <h3 className="mobile-cart-product__name">{name}</h3>
            <p className="mobile-cart-product__category">{category}</p>
     
                
            </div>
            <div className="mobile-cart-product__info-bottom">
              <div className="mobile-cart-product__counter">
                    <div className="mobile-cart-product__counter-reduce" onClick={decrease}>-</div>
                    <div className="mobile-cart-product__counter-quantity">{counter}</div>
                    <div className="mobile-cart-product__counter-increase" onClick={increase}>+</div>
                </div>
                <div className="mobile-cart-product__cost">{price}</div> 
            </div>
              </div>
        </section>
    )
}

export default MobileProductInCart;