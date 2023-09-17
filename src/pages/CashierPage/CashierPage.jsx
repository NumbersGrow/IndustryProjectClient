import Cashier from "../../components/Cashier/Cashier";
import CashierMenu from "../../components/CashierMenu/CashierMenu";
import CashierCategories from "../../components/CashierCategories/CashierCategories";

function CashierPage() {
    return (
        <div className="cashier-page">
            <Cashier />
            <CashierMenu />
            <CashierCategories />
        </div>
    )
}

export default CashierPage;