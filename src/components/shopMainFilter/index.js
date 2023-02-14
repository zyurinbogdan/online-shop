import {React, useState} from "react";
import styles from "./index.module.css";
import { ShopFilter } from "../shopFilter";
import { ShopSearch } from "../shopSearch";


export const ShopMainFilter = () => {
    const [sideBarIsShown, setSideBarIsShown] = useState(false);

    const showSideBar = () => {
        if (!sideBarIsShown) {
            setSideBarIsShown(true);
        } else {
            setSideBarIsShown(false);
        }
    };

    return(
        <div className={styles.searchWrapper}>
            <ShopSearch/>
            <ShopFilter showSideBar={showSideBar} sideBarIsShown={sideBarIsShown}/>
        </div>
    );
};