import CategoryItem from "../CategoryItem/CategoryItem"
import "./Directory.scss"

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category, i) => (
                <CategoryItem category={category} key={i} />
            ))}
        </div>
    )
}

export default Directory