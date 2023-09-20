import './MobileProduct.scss';
import { React, useState } from 'react'
import mockData from '../../../assets/mockdata/mockdata';


function MobileProduct() {


    return (
        <section className="mobile-product">
            <div className="mobile-product__pic-container">
            <img className="mobile-product__pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="placeholder image" />
           <div className="mobile-product__pic-container-add">+</div>
           </div>
           
       

            <h3 className="mobile-product__name">Product Name</h3>
            <p className="mobile-product__cost">$12.00</p> 
       
             
        </section>
    )
}

export default MobileProduct;