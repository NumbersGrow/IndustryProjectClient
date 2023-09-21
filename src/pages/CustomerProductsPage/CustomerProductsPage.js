import './CustomerProductsPage.scss';

import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";
import MobileProduct from "../../components/Customer/MobileProduct/MobileProduct";
import { ReactComponent as ArrowRight } from "../../assets/icons/chevron-right.svg"; 
import MobileSearch from '../../components/Customer/MobileSearch/MobileSearch';
import FloatingAvatar from '../../components/FloatingAvatar/FloatingAvatar';


function CustomerProductsPage() {
    
    return (
  <div className='container'>
<HeaderMobile linkText="CHANGE STORE" className="container-header" />
<MobileSearch/>
<h3>Bath Bombs</h3>
<div className='container-products'> 
<MobileProduct />
<MobileProduct />
<MobileProduct />
<MobileProduct />  
</div>
<div className='container-products__more'><p>See All <ArrowRight className='container-products__icon'/> </p></div>

<h3>Skincare</h3>
<div className='container-products'> 
    <MobileProduct />
<MobileProduct />
<MobileProduct />
<MobileProduct />
</div>
<div className='container-products__more'><p>See All <ArrowRight className='container-products__icon'/> </p></div>



<h3>Bubble Bars</h3>
<div className='container-products'> 
    <MobileProduct />
<MobileProduct />
<MobileProduct />
<MobileProduct />
</div>

<div className='container-products__more'><p>See All <ArrowRight className='container-products__icon'/> </p></div>
<FloatingAvatar />

  </div>
    )
};

export default CustomerProductsPage;