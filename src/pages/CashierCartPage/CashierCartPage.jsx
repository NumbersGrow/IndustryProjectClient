import './CashierCartPage.scss';

import Header from "../../components/Cashier/Header/Header";
import Profile from "../../components/Cashier/Profile/Profile";
import Menu from "../../components/Cashier/Menu/Menu";
import Cart from "../../components/Cashier/Cart/Cart";
import Payment from "../../components/Cashier/Payment/Payment";

function CashierCartPage() {
    const isHidden = "cart__button--hidden";

    return (
        <div>
            <Header />
            <div className="cashier-page">
                <div className="cashier-page__sidebar">
                        <Profile />
                        <Menu />
                </div>

                <div className="cashier-page__main">
                    <Cart isHidden={isHidden} />    
                </div>

            <div className="cashier-page__payment">
                <Payment />
            </div>
        </div>

        </div>
    )
}

export default CashierCartPage;