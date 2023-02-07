import React, { useEffect, useState } from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { ShopSearch } from "../components/shopSearch";
import { fetchProducts } from "../utils/fetchProducts";
import { Preloader } from "../components/preloader";


export const Shop = () => {
    const [products, setProducts] = useState(null);
    const [sideBarIsShown, setSideBarIsShown] = useState(false);
    useEffect(() => {fetchProducts().then(({products: goods}) => {
        setProducts(goods);
    })}, []);

    const showSideBar = () => {
        if (!sideBarIsShown) {
            setSideBarIsShown(true);
        }
    };

    return <>
        <ShopSearch showSideBar={showSideBar}/>
        {products ? <ShopProductsList products={products}/> : <Preloader/>}
    </>
};