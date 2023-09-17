import './CashierPage.scss';

import Header from "../../components/Cashier/Header/Header";
import Profile from "../../components/Cashier/Profile/Profile";
import Menu from "../../components/Cashier/Menu/Menu";
import Categories from "../../components/Cashier/Categories/Categories";
import CategoryGallery from "../../components/Cashier/CategoryGallery/CategoryGallery";
import Cart from "../../components/Cashier/Cart/Cart";

function CashierPage() {
    return (
        <div>
            <Header />
            <div className="cashier-page">
                <div className="cashier-page__sidebar">
                        <Profile />
                        <Menu />
                </div>

                <div className="cashier-page__main">
                        <Categories />
                        <CategoryGallery />
                </div>

            <div className="cashier-page__cart">
                <Cart />
            </div>
        </div>

        </div>
    )
}

export default CashierPage;