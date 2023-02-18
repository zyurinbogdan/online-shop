import React from "react";
import { selectUserName, selectUserAuth, login, logout } from "../../redux/slices/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {AddToCartButton} from '../addToCartButton';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './index.module.css';

export const MainMenu = () => {
    const dispatch = useDispatch();
    const {userName} = useSelector(selectUserName);
    const {isAuth} = useSelector(selectUserAuth);
    const userLogin = () => {
        dispatch(login());
    };
    const userLogout = () => {
        dispatch(logout());
    };

    const navigate = useNavigate();
    const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route;
    const navigateToCart = () => navigate('/cart');

    return (
        <>
            <nav className={styles.wrapper}>
                {isAuth ? 
                    <><span className={styles.userName}>{userName}</span> <NavLink to='/' className={activeClassName} onClick={userLogout}>logout</NavLink></> : 
                    <><span className={styles.userName}>userName</span> <NavLink to='/' className={activeClassName} onClick={userLogin}>Login</NavLink></>}
                <NavLink to='/login' className={activeClassName}>user</NavLink>
                <NavLink to='/contacts' className={activeClassName}>contacts</NavLink>
                <NavLink to='/' className={activeClassName}>shop</NavLink>
                <AddToCartButton handleClick={navigateToCart} size="s"/>
            </nav>
            <Outlet/>
        </>
    );
};

