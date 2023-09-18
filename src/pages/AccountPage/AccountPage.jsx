import './AccountPage.scss';
import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from "../../assets/icons/icons8-close.svg";

import MenuListItem from "../../components/MenuListItem/MenuListItem";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Collectible } from "../../assets/icons/diamond.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import HeaderMobile from '../../components/Customer/HeaderMobile/HeaderMobile';


function AccountPage() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(prevState => !prevState);
    }
    
    return (
        <div className="account-page-wrapper">
            <HeaderMobile onMenuToggle={toggleMenu} />
            <section className={`menu__account ${isVisible ? 'menu__account--visible' : ''}`}>
                <div className="account"> 
                    <div></div>
                    <p className="account__title">My Account </p>
                    <CloseIcon className="account__close" onClick={toggleMenu} />
                </div>
                <MenuListItem icon={<Settings />} title={"Settings"} />
                <MenuListItem icon={<Collectible />} title={"Collectibles Wallet"} />
                <MenuListItem icon={<Help />} title={"Need Help?"} />
                <MenuListItem icon={<Cart />} title={"Start In-store Cart"} />
            </section>
        </div>
    );
}

export default AccountPage;


