import React from 'react';
import './PaymentButton.scss';


function PaymentButton({ label, logoSrc}) {
    return (
        <button className="payment-button">
        {logoSrc}
        {label}
        </button>
        

    );
}



export default PaymentButton;
