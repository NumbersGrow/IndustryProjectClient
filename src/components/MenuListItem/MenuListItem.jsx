import './MenuListItem.scss';

function MenuListItem( {icon, title }) {
    return (
        <section className="menu-item">
            <div>{icon}</div>
            <h2>{title}</h2>
            <div></div>
        </section>
    );
}

export default MenuListItem;