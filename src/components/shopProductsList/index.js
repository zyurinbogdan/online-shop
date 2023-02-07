import React from "react";
import { ShopProduct } from "../shopProduct";
import styles from './index.module.css';



export const ShopProductsList = ({ products }) => (
    <div className={styles.productList}>
        {products.map((product) => {
            return (
                <ShopProduct {...product} key={product.id}/>
            );
        })}
    </div>
);
