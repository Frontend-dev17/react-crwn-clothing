import "./CartDropdown.scss";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { useContext } from "react";
import { CartContexts } from "../Contexts/Cartcontexts";
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContexts)
    const toggleOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item => (
                    <CartItem cartItems={item} key={item.id} />
                )))}
            </div>
            <Link to="/checkout"><Button onClick={toggleOpen}>Go to checkout</Button></Link>
        </div>
    )
}

export default CartDropdown