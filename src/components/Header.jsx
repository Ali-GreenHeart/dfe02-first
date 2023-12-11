import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { BasketContext } from "../context/BasketContext"

const Header = ({ }) => {
    const { items } = useContext(BasketContext)
    const { email, username } = useContext(AuthContext)

    return (
        <div style={{ backgroundColor: 'peru' }}>
            <span style={{ marginRight: 20 }}>Logo</span>
            <span style={{ marginRight: 20 }}>Signed as {email}</span>
            <span style={{ marginRight: 20 }}>I know you bro, you're {username}</span>
            <p>Products @ Cart "{items.length}"</p>
        </div>
    )
}
export default Header
