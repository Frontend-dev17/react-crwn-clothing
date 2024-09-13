import { CategoriesContext } from '../../Components/Contexts/CategoryContexts';
import { useContext } from "react";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (<CategoryPreview title={title} products={products} />)
                })
            }

        </div>
    )
}

export default CategoriesPreview