import './CashierMenu.scss';

function CashierMenu() {
    return (
        <section className="menu">
            <div className="menu__item">
                <div className="menu__item-icon">
                </div>
                <h2 className="menu__item-name">Name</h2>
            </div>
            <div className="menu__item">
                <div className="menu__item-icon">
                </div>
                <h2 className="menu__item-name">Promos</h2>
            </div>
            <div className="menu__item">
                <div className="menu__item-icon">
                </div>
                <h2 className="menu__item-name">History</h2>
            </div>
            <div className="menu__item">
                <div className="menu__item-icon">
                </div>
                <h2 className="menu__item-name">Settings</h2>
            </div>
            <div className="menu__item">
                <div className="menu__item-icon">
                </div>
                <h2 className="menu__item-name">Log Out</h2>
            </div>
        </section>
    )
}

export default CashierMenu;