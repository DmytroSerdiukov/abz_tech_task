import React, { useEffect, useState } from 'react'
import Users from '.'

import * as axios from 'axios'

const UsersContainer = () => {

    useEffect( () => {
        fetchUsers()
      }, [])
    
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    const fetchUsers = async() => {
        try {
            const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            const newUsers = response.data.users
            setPage(page+1)
            setUsers([...newUsers, ...users])
          } catch (e) {
            alert(e)
        }
    }


    return <Users fetchUsers={fetchUsers} users={users}/>
}

export default UsersContainer