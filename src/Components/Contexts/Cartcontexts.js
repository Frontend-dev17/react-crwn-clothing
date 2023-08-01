import { createContext, useState } from "react";

export const CartContexts = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(CartContexts)
    const value = { isCartOpen, setIsCartOpen }
    return (
        <CartContexts.Provider value={value}>{children}</CartContexts.Provider>
    )
}