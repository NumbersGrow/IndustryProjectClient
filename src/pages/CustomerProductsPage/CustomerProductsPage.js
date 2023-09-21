import './CustomerProductsPage.scss';
import image1 from "../../assets/images/lord_of_misrule_bath_bomb_ecom_2023_3accf742_thumbnail_256.png";
import image2 from "../../assets/images/punkin_pumpkin_bath_bomb_2023_724062ec_thumbnail_256.png";
import image3 from "../../assets/images/ghostie.avif";
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
<MobileProduct name="PUMKIN PUMPKIN"  price="$8.00" imgSrc={image1}/>
<MobileProduct name="ALIEN"  price="$10.00" imgSrc={image2}/>
<MobileProduct name="LORD OF MISRULE" price="$9.50" imgSrc={image3}/>
<MobileProduct name="ALIEN"  price="$10.00" imgSrc={image2}/>  
</div>
<div className='container-products__more'><p>See All <ArrowRight className='container-products__icon'/> </p></div>

<h3>Skincare</h3>
<div className='container-products'> 
    <MobileProduct name="ALIEN"  price="$10.00" imgSrc={image2}/>
<MobileProduct name="ALIEN"  price="$10.00" imgSrc={image2}/>
<MobileProduct name="LORD OF MISRULE" price="$9.50" imgSrc={image3}/>
<MobileProduct  name="PUMKIN PUMPKIN"  price="$8.00" imgSrc={image1}/>
</div>
<div className='container-products__more'><p>See All <ArrowRight className='container-products__icon'/> </p></div>



<h3>Bubble Bars</h3>
<div className='container-products'> 
<MobileProduct name="PUMKIN PUMPKIN"  price="$8.00" imgSrc={image1}/>
<MobileProduct name="ALIEN"  price="$10.00" imgSrc={image2}/>
<MobileProduct name="ALIEN"  price="$10.00" imgSrc={image2}/>
<MobileProduct name="PUMKIN PUMPKIN"  price="$8.00" imgSrc={image1}/>
</div>

<div className='container-products__more'><p>See All <ArrowRight className='container-products__icon'/> </p></div>
<FloatingAvatar />

  </div>
    )
};

export default CustomerProductsPage;