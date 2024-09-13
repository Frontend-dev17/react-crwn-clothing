import "./Category.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoriesContext } from './../../Components/Contexts/CategoryContexts';

const Category = () => {

    const { categoriesMap } = useContext(CategoriesContext)
    const { category } = useParams()
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <>
            <h2 className="category-title">{category}</h2>
            <div className="categories-container">
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
}

export default Category