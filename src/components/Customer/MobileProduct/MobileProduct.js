import './MobileProduct.scss';
import { React, useState } from 'react'
import mockData from '../../../assets/mockdata/mockdata';


function MobileProduct({ name, imgSrc, price }) {


    return (
        <section className="mobile-product">
            <div className="mobile-product__pic-container">
            <img className="mobile-product__pic" src={imgSrc} alt="placeholder image" />
           <div className="mobile-product__pic-container-add">+</div>
           </div>
           
       

            <h3 className="mobile-product__name">{name}</h3>
            <p className="mobile-product__cost">{price}</p> 
       
             
        </section>
    )
}

export default MobileProduct;