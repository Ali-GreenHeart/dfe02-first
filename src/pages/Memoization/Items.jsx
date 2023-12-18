import { useEffect, useState } from "react"

const Items = ({ getItems }) => {
    const [items, setItems] = useState([])

    console.log('child items component rendered...')

    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return (
        <div>
            <hr />
            <hr />
            <hr />
            <h1>Items component</h1>
            <p>item0 : {items[0]}</p>
            <p>item1 : {items[1]}</p>
            <p>item2 : {items[2]}</p>
        </div>
    )
}
export default Items
