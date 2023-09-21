import './MenuListItem.scss';
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";


function MenuListItem( {icon, title} ) {
    const navigate = useNavigate();
    const handleGoToStore = ()=>{
      navigate('/customer/cart');
    };

    return (
        <section className="menu-item" onClick={handleGoToStore}>
            {icon}
            <h2 className="menu-item__title">{title}</h2>
            <ChevronRight />
        </section>
    );
}

export default MenuListItem;