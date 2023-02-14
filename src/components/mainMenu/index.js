import React from "react";
import { Outlet } from "react-router-dom";

export const MainMenu = () => {
    return (
        <>
            <nav>
                <button>Contacts</button>
                <button>Shop</button>
                <button>User</button>
                <button>Cart</button>
            </nav>
            <Outlet/>
        </>
    );
};