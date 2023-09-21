import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./CreditCardForm.scss";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/checkbox.svg";
import { ReactComponent as MasterIcon} from "../../assets/icons/Mastercard-Logo.wine.svg";
import FormButton from '../FormButton/FormButton';


function CreditCardForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleSubmit = () => {
     navigate('/customer');
    };

    return (
        <div className='credit-payment'>
        <section className='credit-payment__header'>
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
        <section className='credit-payment__details'>

       
        <form   onSubmit={handleSubmit}>
            <div className='credit-payment__details-form'>
            <div className="credit-payment__details-form__name"> 
                      <label>  Cardholder name </label>
                    <input 
                        type="text" 
                        name="cardHolderName" 
                        placeholder='Rebeca Sousa'
                    />
               
            </div>
          
            
            <div className="credit-payment__details-form__number" >
                <label>
                    Card number </label>
                    <input 
                        type="text" 
                        name="cardNumber" 
                        placeholder='9999 8888 9999 0909'
                        maxLength="16"
                    />
                <MasterIcon className="credit-payment__details-form__number-master"/>

            </div>
            <div>

            </div>
            <div  className="credit-payment__details-form--bottom">
            <div className="credit-payment__details-form__date">
                <label> Exp date </label>
                    <input 
                        type="text" 
                        name="expiryDate" 
                        placeholder='02/2022'
                        maxLength="5"
                    />
            </div >
            <div className="credit-payment__details-form__cvc">
                <label> CVC </label>
                    <input 
                        type="password" 
                        name="cvv" 
                        placeholder='123'
                        maxLength="3"
                    />
               
            </div>
            </div>
            <div className="credit-payment__details-form__save" >
            <CheckIcon className="credit-payment__details-form__save-icon"  />
            <p>Save your information card</p>
            </div>
            </div>
            <FormButton value="PAY NOW" className="form-button" type="submit" />
        </form>
        </section  >
        </div>
    );
}

export default CreditCardForm;