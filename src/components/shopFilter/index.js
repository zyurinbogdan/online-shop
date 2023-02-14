import React from "react";
import filterIcon from '../../assets/filter_icon.png';
import styles from './index.module.css';


export const ShopFilter = ({showSideBar, sideBarIsShown}) => {
    return (<>
            <button className={styles.filterButton} onClick={showSideBar}>
                <img src={filterIcon} alt='filter'/>
            </button>
            {sideBarIsShown ? 
                    <div>
                        <button onClick={showSideBar}>OK</button>
                    </div> :
                    null    
                }
        </>
    );
};