import './CategoryGallery.scss';
import ProductCard from "./ProductCard";
import { ReactComponent as Next } from "../../../assets/icons/next.svg";

function CategoryGallery() {
    return (
        <section className="category-gallery">
            <h2 className="category-gallery__title">Category Name</h2>
            <div className="category-gallery__container">
                <div className="category-gallery__products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="category-gallery__next"><Next /></div>
            </div>
        </section>
    )
}

export default CategoryGallery;