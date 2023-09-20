import './Categories.scss';

function Categories() {
    return (
        <section className="categories">
            <h2 className="categories__title">Categories</h2>
            <ul className="categories__list">
                <li className="categories__list-item">New Products</li>
                <li className="categories__list-item categories__list-item--active">Bath Bombs</li>
                <li className="categories__list-item">Body Care</li>
                <li className="categories__list-item">Bubble Bars</li>
                <li className="categories__list-item">Skincare</li>
                <li className="categories__list-item">Shower Products</li>
                <li className="categories__list-item">Gifts</li>
            </ul>
        </section>
    )
}

export default Categories;