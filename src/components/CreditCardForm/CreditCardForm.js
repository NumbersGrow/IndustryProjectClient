import React, { useState } from 'react';
import "./CreditCardForm.scss";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";


function CreditCardForm() {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);  
        alert('Form submitted! Check the console.');
    };

    return (
        <div className='credit-payment'>
        <section>
            <h2>New card</h2>
            <div className='credit-payment-wrapper'>
            <div className='credit-payment-wrapper__card'>
            </div > 
            </div >
            <div className='credit-payment-scanner' >
            <CameraIcon className='credit-payment-scanner__img' />
            <h3>Scan your card</h3>            
            </div>
          
        </section>

        <form  className='credit-payment__form' onSubmit={handleSubmit}>
            <div>
                <label>
                    Card Holder Name:
                    <input 
                        type="text" 
                        name="cardHolderName" 
                        value={formData.cardHolderName} 
                        onChange={handleChange} 
                        required
                    />
                </label>
               <div></div>
            </div>
            <div>
                <label>
                    Card Number:
                    <input 
                        type="text" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleChange} 
                        maxLength="16"
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Expiry Date (MM/YY):
                    <input 
                        type="text" 
                        name="expiryDate" 
                        value={formData.expiryDate} 
                        onChange={handleChange} 
                        maxLength="5"
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    CVV:
                    <input 
                        type="password" 
                        name="cvv" 
                        value={formData.cvv} 
                        onChange={handleChange} 
                        maxLength="3"
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default CreditCardForm;