import './CashierReceiptPage.scss';

import Header from "../../components/Cashier/Header/Header";
import Cart from "../../components/Cashier/Cart/Cart";

function CashierReceiptPage() {
    const isHidden = "cart__button--hidden";

    return (
        <div>
            <Header />
            <div className="cashier-page">
                <div className="cashier-page__main">
                    <Cart isHidden={isHidden} />    
                </div>
            </div>
        </div>
    )
}

export default CashierReceiptPage;