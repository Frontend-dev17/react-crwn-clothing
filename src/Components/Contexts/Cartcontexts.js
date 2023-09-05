import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem =>
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        ))
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, itemToRemove) => {

    // checking whether the cart has items in it o not , finding anfd removing it from cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id)

    // check if quantity is === 1 , if 1 remove while deceremented remove the item from the cart by filtering out
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    //return back cart items with matching cart items with reduced qty
    return cartItems.map((cartItem =>
        cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            :
            cartItem
    ))
}

const removeItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}


export const CartContexts = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }, // checks whether cart dropdown is open/not
    cartItems: [], // cart items present inside cart
    addItemToCart: () => { }, // for adding items from cart
    removeItemFromCart: () => { }, // for removing items from cart by deceresing
    clearCartItem: () => { }, // totally removing the item from cart
    cartCount: 0,
    totalPrice: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const totalCartPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotalPrice(totalCartPrice)
    }, [cartItems])

    // adding items to cart 
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    // removing items from cart by decreasing
    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove))
    }

    // removing items from cart itself
    const clearCartItem = (cartItemToRemove) => {
        setCartItems(removeItem(cartItems, cartItemToRemove))
    }

    //returning the values from cart contest
    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearCartItem, cartItems, cartCount, totalPrice }
    return (
        <CartContexts.Provider value={value}>{children}</CartContexts.Provider>
    )
}