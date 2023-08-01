import "./Shop.scss";
import { ProductContexts } from "../../Components/Contexts/ProductContexts";
import { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Shop = () => {
    const { products } = useContext(ProductContexts)
    return (
        <div className="shop-products-container">
            {
                products.map(products => (
                    <ProductCard product={products} key={products.id} />
                ))}
        </div>
    )
}

export default Shop