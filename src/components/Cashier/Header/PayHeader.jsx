import "./PayHeader.scss";

function PayHeader() {
    const Logo = require("../../../assets/logo/lush-logo.png");

    return (
        <header className="pay-header">
            <img className="pay-header__logo" src={Logo} alt="Lush logo" />
            <p className="pay-header__store">Store #100000</p>
        </header>
    )
}

export default PayHeader;