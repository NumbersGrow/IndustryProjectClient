import Profile from "../../components/Cashier/Profile/Profile";
import Menu from "../../components/Cashier/Menu/Menu";
import Categories from "../../components/Cashier/Categories/Categories";
import CategoryGallery from "../../components/Cashier/CategoryGallery/CategoryGallery";

function CashierPage() {
    return (
        <div className="cashier-page">
            <Profile />
            <Menu />
            <Categories />
            <CategoryGallery />
        </div>
    )
}

export default CashierPage;