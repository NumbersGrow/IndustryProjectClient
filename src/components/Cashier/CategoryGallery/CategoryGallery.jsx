import './CategoryGallery.scss';
import ProductCard from "./ProductCard";
import { ReactComponent as Next } from "../../../assets/icons/next.svg";

function CategoryGallery() {
    return (
        <section className="category-gallery">
            <h2 className="category-gallery__title">Bath Bombs</h2>
            <div className="category-gallery__container">
                <div className="category-gallery__products">
                    <ProductCard name="Alien" price="10.00" qty="1" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/alien_bubble_bar_ecom_2023_60a7fa37_thumbnail_256.png" />
                    <ProductCard name="Sakura" price="7.50" qty="0" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/sakura_bath_bomb_2021_thumbnail_256.png" />
                    <ProductCard name="Screamo" price="8.00" qty="0" image="https://unicorn.lush.com/media/thumbnails/products/screamo_bath_bomb_2023_ecf3c23e_thumbnail_256.png" />
                    <ProductCard name="Pumpkin Pumpkin" price="8.00" qty="1" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/punkin_pumpkin_bath_bomb_2023_724062ec_thumbnail_256.png" />
                    <ProductCard name="Lord of Misrule" price="10.00" qty="1" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/lord_of_misrule_bath_bomb_ecom_2023_3accf742_thumbnail_256.png" />
                    <ProductCard name="Unicorn Poop" price="10.00" qty="0" image="https://www.lush.com/cdn-cgi/image/width=640,f=auto,quality=75/https://unicorn.lush.com/media/thumbnails/products/unicorn_poop_bath_bomb_japan_lush_labs_box_ecom_image_2021_copy_thumbnail_25.png" />
                </div>
                <div className="category-gallery__next"><Next /></div>
            </div>
        </section>
    )
}

export default CategoryGallery;