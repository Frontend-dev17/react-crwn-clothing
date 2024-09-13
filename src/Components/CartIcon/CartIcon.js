
import { useContext } from "react";
import { CartContexts } from './../Contexts/Cartcontexts';
import { CartIconContainer, ItemsCount, ShopSvg } from "./CartIcon.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContexts)
    const toggleOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleOpen}>
            <ShopSvg />
            <ItemsCount>{cartCount}</ItemsCount>
        </CartIconContainer>
    )
}

export default CartIcon