import Cashier from "../../components/Cashier/Cashier";
import CashierMenu from "../../components/CashierMenu/CashierMenu";

function CashierPage() {
    return (
        <div className="cashier-page">
            <Cashier />
            <CashierMenu />
        </div>
    )
}

export default CashierPage;