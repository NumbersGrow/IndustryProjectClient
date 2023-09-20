import './CashierPayPage.scss';
import PayHeader from "../../components/Cashier/Header/PayHeader";
import { ReactComponent as Tap } from "../../assets/icons/tap.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down.svg";
import { Link } from "react-router-dom"

function CashierPayPage() {
    return (
        <div>
            <PayHeader />
            <div className="pay">
                <div className="pay__amount-container">
                    <h2 className="pay__amount-title">Total Amount</h2>
                    <p className="pay__amount">$32.44</p>
                </div>
                <Link to="/cashier/thank-you"><div className="pay__tap-container">
                    <h2 className="pay__tap-title">Tap Card Here</h2>
                    <Tap className="pay__icon" />
                </div></Link>
                <div className="pay__insert-container">
                    <h2>Or Insert Card Below</h2>
                    <Arrow className="pay__icon"/>
                </div>
            </div>
        </div>
    )
}

export default CashierPayPage;