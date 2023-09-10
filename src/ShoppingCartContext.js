import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0);

    const updateCartItems = (count) => {
        setCartItems(count);
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItems, updateCartItems }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
