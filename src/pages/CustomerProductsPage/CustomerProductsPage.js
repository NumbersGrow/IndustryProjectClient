import './CustomerProductsPage.scss';

import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";
import MobileProduct from "../../components/Customer/MobileProduct/MobileProduct";

function CustomerProductsPage() {
    
    return (
  <div className='container'>
<HeaderMobile linkText="CHANGE STORE" />
<h2>Bath Bombs</h2>
<div className='container-products'> 
<MobileProduct />
<MobileProduct />
<MobileProduct />
<MobileProduct />  
</div>
<h2>Skincare</h2>
<div className='container-products'> 
    <MobileProduct />
<MobileProduct />
<MobileProduct />
<MobileProduct />
</div>



<h2>Bubble Bars</h2>
<div className='container-products'> 
    <MobileProduct />
<MobileProduct />
<MobileProduct />
<MobileProduct />
</div>


  </div>
    )
};

export default CustomerProductsPage;