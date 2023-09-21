import "./AccountPage.scss";
import MenuListItem from "../../components/MenuListItem/MenuListItem";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Collectible } from "../../assets/icons/diamond.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";

function AccountPage() {


  return (
    <section className="account">
      <h1 className="account__title">My Account</h1>
      <MenuListItem
        icon={<Settings className="account__icon" />}
        title={"Settings"}
      />
      <MenuListItem
        icon={<Collectible className="account__icon" />}
        title={"Collectibles Wallet"}
      />
      <MenuListItem
        icon={<Help className="account__icon" />}
        title={"Need Help?"}
      />
      <MenuListItem
        icon={<Cart className="account__icon" />}
        title={"Start In-store Cart"}
    
      />
    </section>
  );
}

export default AccountPage;
