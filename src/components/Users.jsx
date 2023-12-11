import axios from "axios"
import { useState, useEffect } from "react"

const url = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(({ data }) => {
                setUsers(data);
            })
    }, [])

    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users
