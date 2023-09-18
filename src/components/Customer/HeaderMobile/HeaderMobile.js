import { ReactComponent as HamIcon} from "../../../assets/icons/icons8-menu.svg"
import "./HeaderMobile.scss";


function HeaderMobile({linkText }) {


    return(
<section className="mobile-header">
 
<h1 className="mobile-header__logo" >LUSH</h1>
<h4>{linkText} </h4>
</section>


);


};

export default HeaderMobile; 