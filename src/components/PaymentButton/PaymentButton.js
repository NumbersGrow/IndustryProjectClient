import React from 'react';
import './PaymentButton.scss';

function PaymentButton({ label, logoSrc, onClick }) {
    return (
        <button className="payment-button" onClick={onClick}>
            {logoSrc}
            {label}
        </button>
    );
}

export default PaymentButton;