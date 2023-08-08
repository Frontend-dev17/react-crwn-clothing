import "./CartDropdown.scss";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { useContext } from "react";
import { CartContexts } from "../Contexts/Cartcontexts";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContexts)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item => (
                    <CartItem cartItems={item} key={item.id} />
                )))}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown