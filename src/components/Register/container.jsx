import React, { useEffect, useState } from 'react'
import * as axios from 'axios'


import Register from '.'
import RegisterProvider from '../../context/RegisterContext'



const RegisterContainer = () => {

    const [positions, setPositions] = useState([])
    const [token, setToken] = useState('')

    useEffect( () => {
        getPositions()
        getToken()
    }, [])
    

    const getPositions = async() => {
        try {
            const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            setPositions(response.data.positions)
        } catch(e) {
            throw e
        }
    }

    const getToken = async() => {
        const token = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        setToken(token.data.token)
    }   

    const createNewUser = async(body) => {
        try {

            const headers = {
                token: token
            }
            await axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users',
                body, 
                {headers: headers}
            )
            
        } catch(e) {
            throw e
        }
    }

    return <RegisterProvider value={{positions, createNewUser}}>
        <Register />
    </RegisterProvider>
}

export default RegisterContainer