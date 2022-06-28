import React, { useEffect, useState } from 'react'
import * as axios from 'axios'


import Register from '.'
import RegisterProvider from '../../context/RegisterContext'



const RegisterContainer = () => {

    const [positions, setPositions] = useState([])

    useEffect( () => {
        getPositions()
    }, [])
    console.log(positions)

    const getPositions = async() => {
        try {
            const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            setPositions(response.data.positions)
            console.log(response)
        } catch(e) {
            throw e
        }
      }

    return <RegisterProvider value={positions}>
        <Register />
    </RegisterProvider>
}

export default RegisterContainer