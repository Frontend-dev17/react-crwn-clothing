import "./CartIcon.scss";
import { ReactComponent as ShopIcon } from "../../Assests/Svg/CartIcon.svg"

import { useContext } from "react";
import { CartContexts } from './../Contexts/Cartcontexts';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContexts)
    const toggleOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className="cart-icon-container" onClick={toggleOpen}>
            <ShopIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon