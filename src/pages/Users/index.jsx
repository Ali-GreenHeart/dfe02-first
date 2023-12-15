import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"

const url = 'https://jsonplaceholder.typicode.com/users'

const UsersWithRedux = ({ users, dispatch }) => {


    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: 'get_users', payload: data })
        })
    }, [])

    return (
        <div>
            {
                users.map(({ username }) => {
                    return (
                        <div key={username}>{username}</div>
                    )
                })
            }
        </div>
    )
}

const mapStoreToProps = (store) => store;

// A -> a
// neyise neyese cevir!
export default connect(mapStoreToProps)(UsersWithRedux)
