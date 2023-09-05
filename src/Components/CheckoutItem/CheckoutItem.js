import "./CheckoutItem.scss";

import { useContext } from "react";
import { CartContexts } from "../Contexts/Cartcontexts";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;

    const { clearCartItem, addItemToCart, removeItemFromCart } = useContext(CartContexts)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow value" onClick={() => removeItemFromCart(cartItem)}>&#10094;</span>
                {quantity}
                <span className="arrow value" onClick={() => addItemToCart(cartItem)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>

            <div className="remove-button" onClick={() => clearCartItem(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;