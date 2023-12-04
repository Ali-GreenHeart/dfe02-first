import axios from "axios"
import { useState, useEffect } from "react"

const url = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    const [users, setUsers] = useState([])
    // 1 defe -> component yarananda!
    // life-cycle -> heyat donemleri


    useEffect(() => {
        console.log('komp yarandi!')
        return () => {
            console.log('komp rip!')
        }
    }, [])

    // hook
    // [] -> komponentin doguldugu an! mount
    // useEffect(() => {
    //     axios.get(url)
    //         .then(({ data }) => {
    //             setUsers(data);
    //             console.log(data)
    //         })
    // }, [])


    // useEffect(() => {
    //     console.log('users deyisdi')
    //     localStorage.setItem('users', JSON.stringify(users))
    // }, [users])
    // update hali -> users deyisende!
    // useEffect(() => { }, [users, test])


    return (
        <div>
            Users
            <button
                onClick={() => {
                    a()
                }}
            >click me</button>
        </div>
    )
}
export default Users
