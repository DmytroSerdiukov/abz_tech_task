import React, { useEffect, useState } from 'react'
import Users from '.'

import * as axios from 'axios'
import useUserData from '../../hooks/fetchUsers'

const UsersContainer = () => {

  const userData = useUserData()

  return <Users {...userData}/>
}

export default UsersContainer