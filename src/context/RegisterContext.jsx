import React from 'react'


export const RegisterContext = React.createContext()

const RegisterProvider = ({children, value}) => {
    return <RegisterContext.Provider value={value}>
        {children}
    </RegisterContext.Provider>
}

export default RegisterProvider