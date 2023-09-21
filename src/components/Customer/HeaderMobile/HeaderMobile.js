import { ReactComponent as HamIcon} from "../../../assets/icons/icons8-menu.svg"
import "./HeaderMobile.scss";


function HeaderMobile({linkText, className }) {

    const [word1, word2] = linkText.split(' ');

    return(
<section className="mobile-header">
 
<h1 className="mobile-header__logo" >LUSH</h1>
<h4 className={`mobile-header__text ${className || ''}`}
>{word1}<br/>{word2} </h4>
</section>


);


};

export default HeaderMobile; 