import React from "react";
import filterIcon from '../../assets/filter_icon.png';
import styles from './index.module.css';


export const ShopSearch = (showSideBar) => {
    return (
        <div className={styles.searchWrapper}>
            <input type='text' className={styles.searchInput}/>
            <button className={styles.filterButton} onClick={showSideBar}>
                <img src={filterIcon} alt='filter'/>
                {showSideBar ? 
                    <div>
                        <button>OK</button>
                    </div> :
                    null    
                }
            </button>
        </div>
    );
};