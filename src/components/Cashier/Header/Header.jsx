import "./Header.scss";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";

function Header() {
    const Logo = require("../../../assets/logo/lush-logo.png");

    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Lush logo" />
            <div className="header__search">
                <input type="search" className="header__search-input" id="search" placeholder="search"></input>
                <Camera />
            </div>
            <p className="header__store">Store #100000</p>
        </header>
    )
}

export default Header;