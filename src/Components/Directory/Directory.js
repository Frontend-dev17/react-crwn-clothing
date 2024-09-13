import "./Directory.scss"
import DirectoryItem from './../DirectoryItem/DirectoryItem';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category, i) => (
                <DirectoryItem category={category} key={i} />
            ))}
        </div>
    )
}

export default Directory