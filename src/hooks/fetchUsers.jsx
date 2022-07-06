import React, { useState, useEffect } from 'react'
import * as axios from 'axios'

const useUserData = () => {

    const [page, setPage] = useState(1)
    const [users, setUsers] = useState([])
    const [success, setSuccess] = useState()
    const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`

    const fetchUsers = async() => {
        try {
            const response = await axios.get(url)
            const newUsers = response.data.users.sort( (a, b) => b.registration_timestamp - a.registration_timestamp)
            console.log(newUsers)
            setPage(page+1)
            setUsers([...newUsers, ...users])
            setSuccess(response.data.success)
          } catch (e) {
            setSuccess(false)
        }
    }

    useEffect( () => {
        fetchUsers()
    }, [])


    return {users, success, fetchUsers}

}

export default useUserData