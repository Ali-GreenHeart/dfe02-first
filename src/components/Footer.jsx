import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Footer = ({ }) => {
    const { email } = useContext(AuthContext)

    return (
        <div style={{ backgroundColor: 'teal' }}>
            <span style={{ marginRight: 20 }}>Logo</span>
            <span style={{ marginRight: 20 }}>Signed as {email}</span>
        </div>
    )
}
export default Footer
