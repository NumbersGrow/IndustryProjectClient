import './Menu.scss';

import { ReactComponent as AddCart } from "../../../assets/icons/add-cart.svg";
import { ReactComponent as Promo } from "../../../assets/icons/commercial.svg";
import { ReactComponent as History } from "../../../assets/icons/time-machine.svg";
import { ReactComponent as Settings } from "../../../assets/icons/settings.svg";
import { ReactComponent as Logout } from "../../../assets/icons/logout.svg";

function Menu() {
    return (
        <section className="menu">
            <div className="menu__item">
                <AddCart className="menu__item-icon" />
                <h2 className="menu__item-name">New Cart</h2>
            </div>
            <div className="menu__item">
                <Promo className="menu__item-icon" />
                <h2 className="menu__item-name">Promos</h2>
            </div>
            <div className="menu__item">
                <History className="menu__item-icon" />
                <h2 className="menu__item-name">History</h2>
            </div>
            <div className="menu__item">
                <Settings className="menu__item-icon" />
                <h2 className="menu__item-name">Settings</h2>
            </div>
            <div className="menu__item">
                <Logout className="menu__item-icon" />
                <h2 className="menu__item-name">Log Out</h2>
            </div>
        </section>
    )
}

export default Menu;