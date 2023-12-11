import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext([])

const BasketContextProvider = ({ children }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const itemsFromStorage = JSON.parse(localStorage.getItem('items'))
        setItems(itemsFromStorage)
    }, [])
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const addBasket = (id) => {
        // setItems([...items, id])
        setItems((pre) => ([...pre, id]))
    }

    return (
        <BasketContext.Provider value={{ items, addBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
export default BasketContextProvider;
