import './MobileProductInCart.scss';
import { React, useState } from 'react'
import mockData from '../../../assets/mockdata/mockdata';


function MobileProductInCart() {
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
            <img className="mobile-cart-product__pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder image" />
            <div className="mobile-cart-product__info">

            <div className="mobile-cart-product__info-top">
            <h3 className="mobile-cart-product__name">Product Name</h3>
            <p className="mobile-cart-product__category">Category</p>
     
                
            </div>
            <div className="mobile-cart-product__info-bottom">
              <div className="mobile-cart-product__counter">
                    <div className="mobile-cart-product__counter-reduce" onClick={decrease}>-</div>
                    <div className="mobile-cart-product__counter-quantity">{counter}</div>
                    <div className="mobile-cart-product__counter-increase" onClick={increase}>+</div>
                </div>
                <div className="mobile-cart-product__cost">$12.00</div> 
            </div>
              </div>
        </section>
    )
}

export default MobileProductInCart;