

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { useContext } from "react";
import { CartContexts } from "../Contexts/Cartcontexts";
import { Link } from "react-router-dom";
import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.styles';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContexts)
    const toggleOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ?
                    (

                        cartItems.map((item => (
                            <CartItem cartItems={item} key={item.id} />
                        )))

                    )
                    :
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Link to="/checkout"><Button onClick={toggleOpen}>Go to checkout</Button></Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown