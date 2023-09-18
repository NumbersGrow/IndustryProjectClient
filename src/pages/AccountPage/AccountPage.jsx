import './AccountPage.scss';

import MenuListItem from "../../components/MenuListItem/MenuListItem";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Collectible } from "../../assets/icons/diamond.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";


function AccountPage() {
    return (
        <section className="account">
            <h1 className="account__title">My Account</h1>
            <MenuListItem icon={<Settings />} title={"Settings"} />
            <MenuListItem icon={<Collectible />} title={"Collectibles Wallet"} />
            <MenuListItem icon={<Help />} title={"Need Help?"} />
            <MenuListItem icon={<Cart />} title={"Start In-store Cart"} />
        </section>
    );
}

export default AccountPage;

