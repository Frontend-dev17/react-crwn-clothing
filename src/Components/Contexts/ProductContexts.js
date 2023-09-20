import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../../Utils/Firebase/Firebase";

export const ProductContexts = createContext({
    products: [],
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])


    const value = { products }
    return (
        <ProductContexts.Provider value={value}>{children}</ProductContexts.Provider>
    )
}