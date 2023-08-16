import "./Checkout.scss";

import { useContext } from "react";
import { CartContexts } from "../../Components/Contexts/Cartcontexts"

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContexts)


    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </div>
            <div>
                {cartItems.map(items => (
                    <div>
                        <img src={items.imageUrl} alt={`${items.name}`} className="" />
                        <span>{items.name}</span>
                        <span>{items.quantity}</span>
                        <span >${items.price}</span>
                        <span>X</span>
                    </div>
                ))}
            </div>
            <div className="total">
                <span>Total: ${totalPrice}</span>
            </div>

        </div>
    )
}

export default Checkout