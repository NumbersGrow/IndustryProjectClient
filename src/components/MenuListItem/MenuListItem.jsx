import './MenuListItem.scss';

import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";


function MenuListItem( {icon, title} ) {
    return (
        <section className="menu-item">
            {icon}
            <h2 className="menu-item__title">{title}</h2>
            <ChevronRight />
        </section>
    );
}

export default MenuListItem;