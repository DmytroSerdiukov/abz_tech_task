import React from 'react'
import Users from '.'

import useUserData from '../../hooks/fetchUsers'

const UsersContainer = () => {

  const userData = useUserData()

  return <Users {...userData}/>
}

export default UsersContainer