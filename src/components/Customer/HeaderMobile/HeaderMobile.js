import { ReactComponent as HamIcon} from "../../../assets/icons/icons8-menu.svg"
import "./HeaderMobile.scss";


function HeaderMobile({ onMenuToggle }) {


    return(

<section className="mobile-header"onClick={onMenuToggle}  >
 
<h1 className="mobile-header__logo" >LUSH</h1>
<div className="mobile-header__link"  > WILL BE PROP</div>
</section>


);


};

export default HeaderMobile; 