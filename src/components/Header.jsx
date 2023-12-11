import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Header = ({ }) => {

    const { email, username } = useContext(AuthContext)

    return (
        <div style={{ backgroundColor: 'peru' }}>
            <span style={{ marginRight: 20 }}>Logo</span>
            <span style={{ marginRight: 20 }}>Signed as {email}</span>
            <span style={{ marginRight: 20 }}>I know you bro, you're {username}</span>
        </div>
    )
}
export default Header
