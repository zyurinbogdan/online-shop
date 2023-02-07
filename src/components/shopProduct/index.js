import React from "react";
import styles from './index.module.css';
import cartIcon from '../../assets/cart_icon.png';


export const ShopProduct = ({id, name, category, description, img, price}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.category}>{category}</p>
            <div className={styles.productImage}>
                <img src={img}/>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.priceWrapper}>
                <p className={styles.price}>{price}</p>
                <button className={styles.addToCartButton}>
                    <img src={cartIcon} alt='cart' />
                </button>
            </div>
        </div>
    );
};