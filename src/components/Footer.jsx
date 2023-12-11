import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { BasketContext } from "../context/BasketContext"
import { products } from "../mock/products"

const Footer = ({ }) => {
    const { items } = useContext(BasketContext)

    const { email } = useContext(AuthContext)

    return (
        <div style={{ backgroundColor: 'teal' }}>
            <span style={{ marginRight: 20 }}>Logo</span>
            <span style={{ marginRight: 20 }}>Signed as {email}</span>
            <ul>
                {
                    products.map((product) => {
                        if (items.includes(product.id)) {
                            return <li key={product.id}>{product.title}</li>
                        }
                    })
                }
            </ul>
        </div>
    )
}
export default Footer
