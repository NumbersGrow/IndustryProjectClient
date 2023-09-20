import './MobileProduct.scss';
import { React, useState } from 'react'
import mockData from '../../../assets/mockdata/mockdata';


function MobileProduct() {


    return (
        <section className="mobile-cart-product">
            <img className="mobile-cart-product__pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder image" />
            <div className="mobile-cart-product__info">

            <div className="mobile-cart-product__info-top">
            <h3 className="mobile-cart-product__name">Product Name</h3>
            <p className="mobile-cart-product__category">Category</p>
            </div>
            <div className="mobile-cart-product__info-bottom">
          
                <div className="mobile-cart-product__cost">$12.00</div> 
            </div>
              </div>
        </section>
    )
}

export default MobileProduct;