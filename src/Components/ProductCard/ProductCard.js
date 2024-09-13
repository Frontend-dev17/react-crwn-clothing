import "./ProductCard.scss";
import Button, { BUTTON_CLASS_TYPES } from "../Button/Button";

import { useContext } from "react";
import { CartContexts } from "../Contexts/Cartcontexts";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContexts)
    const addingItemToCart = () => addItemToCart(product)


    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={BUTTON_CLASS_TYPES.inverted} onClick={addingItemToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard