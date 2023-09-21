import React from 'react';
import './CustomerCartPage.scss';

import { useNavigate } from 'react-router-dom';
import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";
import MobileCart from '../../components/Customer/MobileCart/MobileCart';

function CustomerCartPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
      navigate(-1); 
  }

    return (
        <div>
            <HeaderMobile linkText="BACK" onLinkClick={handleBackClick} />
            <MobileCart />
        </div>
    );
}

export default CustomerCartPage;