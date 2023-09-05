import "./Checkout.scss";

import { useContext } from "react";
import { CartContexts } from "../../Components/Contexts/Cartcontexts"
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContexts)


    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">Product</div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {cartItems.map((items) => (
                <CheckoutItem cartItem={items} key={items.id} />
            ))}
            <div className="total">
                <span>Total: ${totalPrice}</span>
            </div>

        </div>
    )
}

export default Checkout